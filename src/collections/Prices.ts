import type { CollectionConfig } from "payload";

const isAdmin = ({ req: { user } }: { req: { user: { collection?: string } | null } }) =>
  user?.collection === "admins";

export const Prices: CollectionConfig = {
  slug: "prices",
  admin: { useAsTitle: "title", defaultColumns: ["title", "kind", "sortOrder", "priceLabel"] },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeValidate: [({ data }) => {
      if (typeof data?.title === "string") data.title = data.title.trim();
      if (typeof data?.priceLabel === "string") data.priceLabel = data.priceLabel.trim();
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
      name: "priceLabel",
      type: "text",
      required: true,
      maxLength: 60,
      validate: (value: unknown) => (typeof value === "string" && value.trim().length > 0 && value.length <= 60) || "Вкажіть ціну до 60 символів",
    },
  ],
};
