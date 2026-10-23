import { randomUUID } from "node:crypto";
import { ValidationError, type CollectionConfig } from "payload";

import { scheduleLocationSchedules } from "../content/schedule.ts";

const isAdmin = ({ req: { user } }: { req: { user: { collection?: string } | null } }) =>
  user?.collection === "admins";

const locations = scheduleLocationSchedules.map(({ id, label }) => ({ label, value: id }));
const days = scheduleLocationSchedules[0].days.map(({ id, label }) => ({ label, value: id }));
const validTime = (value: unknown) => typeof value === "string" && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);

export const ScheduleEntries: CollectionConfig = {
  slug: "schedule-entries",
  admin: { useAsTitle: "group", defaultColumns: ["locationId", "dayId", "time", "group"] },
  access: { create: isAdmin, read: () => true, update: isAdmin, delete: isAdmin },
  hooks: {
    beforeValidate: [async ({ data, operation, req }) => {
      if (!data) return data;
      if (typeof data.group === "string") data.group = data.group.trim();
      if (operation === "create") {
        if (!locations.some(({ value }) => value === data.locationId) || !days.some(({ value }) => value === data.dayId)) {
          throw new ValidationError({ collection: "schedule-entries", errors: [{ path: "locationId", message: "Оберіть локацію та день" }], req });
        }
        data.key = randomUUID();
        const { docs } = await req.payload.find({
          collection: "schedule-entries",
          where: { and: [{ locationId: { equals: data.locationId } }, { dayId: { equals: data.dayId } }] },
          sort: "-sortOrder", limit: 1, depth: 0, overrideAccess: false, user: req.user, req,
        });
        data.sortOrder = docs.length ? Number(docs[0].sortOrder) + 1 : 0;
      }
      return data;
    }],
  },
  fields: [
    { name: "key", type: "text", required: true, unique: true, access: { update: () => false } },
    { name: "locationId", type: "text", required: true, access: { update: () => false },
      validate: (value: unknown) => locations.some(({ value: id }) => id === value) || "Оберіть локацію" },
    { name: "dayId", type: "text", required: true, access: { update: () => false },
      validate: (value: unknown) => days.some(({ value: id }) => id === value) || "Оберіть день" },
    { name: "sortOrder", type: "number", required: true, access: { update: () => false } },
    { name: "time", type: "text", required: true, validate: (value: unknown) => validTime(value) || "Вкажіть час у форматі ГГ:ХХ" },
    { name: "group", type: "text", required: true, maxLength: 100,
      validate: (value: unknown) => (typeof value === "string" && value.trim().length > 0 && value.length <= 100) || "Вкажіть групу до 100 символів" },
  ],
};
