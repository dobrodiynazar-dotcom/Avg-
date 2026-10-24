import { sql, type MigrateDownArgs, type MigrateUpArgs } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "prices" ADD COLUMN "price" numeric;
    UPDATE "prices" SET "price" = CASE
      WHEN "key" = 'veterans' AND "price_label" = 'Безкоштовно' THEN 0
      WHEN "price_label" ~ '^[0-9]+([.,][0-9]{1,2})? грн(/м(ісяць)?)?$'
        THEN replace(split_part("price_label", ' ', 1), ',', '.')::numeric
      ELSE NULL
    END;
    DO $$ BEGIN
      IF EXISTS (
        SELECT 1 FROM "prices" WHERE "price" IS NULL
          OR ("price" <= 0 AND NOT ("key" = 'veterans' AND "price" = 0))
          OR "price" * 100 > 9007199254740991
      ) THEN
        RAISE EXCEPTION 'Prices contain a label that cannot be safely converted to a numeric price';
      END IF;
    END $$;
    ALTER TABLE "prices" ALTER COLUMN "price" SET NOT NULL;
    ALTER TABLE "prices" DROP COLUMN "price_label";
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "prices" ADD COLUMN "price_label" varchar;
    UPDATE "prices" SET "price_label" = CASE
      WHEN "price" = 0 THEN 'Безкоштовно'
      ELSE "price"::text || CASE WHEN "kind" = 'subscription' THEN ' грн/м' ELSE ' грн' END
    END;
    ALTER TABLE "prices" ALTER COLUMN "price_label" SET NOT NULL;
    ALTER TABLE "prices" DROP COLUMN "price";
  `);
}
