import { randomUUID } from "node:crypto";
import { ValidationError, type CollectionConfig } from "payload";

import { parsePriceInput } from "../lib/prices.ts";

const isAdmin = ({ req: { user } }: { req: { user: { collection?: string } | null } }) =>
  user?.collection === "admins";

export const Prices: CollectionConfig = {
  slug: "prices",
  admin: { useAsTitle: "title", defaultColumns: ["title", "kind", "sortOrder", "price"] },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeOperation: [({ args, operation, req }) => {
      if (operation !== "create" && operation !== "update") return args;
      if (!args.data || typeof args.data !== "object") return args;
      if (!Object.hasOwn(args.data, "price")) return args;
      const price = parsePriceInput(args.data.price);
      // Payload sanitizes number fields with parseFloat before field/collection validation.
      if (price === null && !(operation !== "create" && args.data.price === 0)) {
        throw new ValidationError({
          collection: "prices",
          errors: [{ path: "price", message: "Вкажіть додатну ціну з максимум двома десятковими знаками" }],
          req,
        });
      }
      args.data.price = price ?? 0;
      return args;
    }],
    beforeValidate: [async ({ data, operation, originalDoc, req }) => {
      if (!data) return data;
      if (typeof data?.title === "string") data.title = data.title.trim();
      const freeCard = operation === "update" && originalDoc?.key === "veterans" && originalDoc?.price === 0;
      if (Object.hasOwn(data, "price")) {
        const price = parsePriceInput(data.price);
        if ((freeCard && data.price !== 0) || (!freeCard && price === null)) {
          throw new ValidationError({
            collection: "prices",
            errors: [{ path: "price", message: freeCard ? "Ця картка залишається безкоштовною" : "Вкажіть додатну ціну з максимум двома десятковими знаками" }],
            req,
          });
        }
        data.price = freeCard ? 0 : price;
      }
      if (operation === "create") {
        data.key = randomUUID();
        if (["subscription", "single", "personal"].includes(data.kind)) {
          const { docs } = await req.payload.find({
            collection: "prices",
            where: { kind: { equals: data.kind } },
            sort: "-sortOrder",
            limit: 1,
            depth: 0,
            overrideAccess: false,
            user: req.user,
            req,
          });
          data.sortOrder = docs.length ? Number(docs[0].sortOrder) + 1 : 0;
        }
      }
      return data;
    }],
  },
  fields: [
    { name: "key", type: "text", required: true, unique: true, access: { update: () => false } },
    {
      name: "kind",
      type: "select",
      required: true,
      options: ["subscription", "single", "personal"],
      access: { update: () => false },
    },
    { name: "sortOrder", type: "number", required: true, access: { update: () => false } },
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 100,
      validate: (value: unknown) => (typeof value === "string" && value.trim().length > 0 && value.length <= 100) || "Вкажіть назву до 100 символів",
    },
    {
      name: "price",
      type: "number",
      required: true,
      validate: (value: unknown) =>
        (parsePriceInput(value) !== null || value === 0) ||
        "Вкажіть додатну ціну з максимум двома десятковими знаками",
    },
  ],
};
