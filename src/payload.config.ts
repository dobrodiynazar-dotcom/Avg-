import path from "node:path";
import { fileURLToPath } from "node:url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Admins } from "./collections/Admins";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Admins.slug,
    importMap: { baseDir: dirname },
  },
  collections: [Admins],
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
});
