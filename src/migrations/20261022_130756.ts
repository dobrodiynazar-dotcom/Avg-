import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_prices_kind" AS ENUM('subscription', 'single', 'personal');
  CREATE TABLE "prices" (
    "id" serial PRIMARY KEY NOT NULL,
    "key" varchar NOT NULL,
    "kind" "enum_prices_kind" NOT NULL,
    "sort_order" numeric NOT NULL,
    "title" varchar NOT NULL,
    "price_label" varchar NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "prices_id" integer;
  CREATE UNIQUE INDEX "prices_key_idx" ON "prices" USING btree ("key");
  CREATE INDEX "prices_updated_at_idx" ON "prices" USING btree ("updated_at");
  CREATE INDEX "prices_created_at_idx" ON "prices" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_prices_fk" FOREIGN KEY ("prices_id") REFERENCES "public"."prices"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_prices_id_idx" ON "payload_locked_documents_rels" USING btree ("prices_id");`)

  await db.execute(sql`
    INSERT INTO "prices" ("key", "kind", "sort_order", "title", "price_label") VALUES
      ('adults', 'subscription', 0, 'Доросла група', '1400 грн/м'),
      ('kids-and-teens', 'subscription', 1, 'Дитячі та підліткові групи', '1300 грн/м'),
      ('military', 'subscription', 2, 'Доросла група', '700 грн/м'),
      ('family', 'subscription', 3, 'Сімейна група', '2400 грн/м'),
      ('veterans', 'subscription', 4, 'Група ветеранів TMS HUB', 'Безкоштовно'),
      ('single-group', 'single', 0, 'Разове групове тренування', '300 грн'),
      ('personal-adult', 'personal', 0, 'Дорослий', '500 грн'),
      ('personal-kids-two', 'personal', 1, 'Дитяче тренування', '800 грн');
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_prices_fk";
    DROP INDEX "payload_locked_documents_rels_prices_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "prices_id";
    DROP TABLE "prices";
    DROP TYPE "public"."enum_prices_kind";
  `)
}
