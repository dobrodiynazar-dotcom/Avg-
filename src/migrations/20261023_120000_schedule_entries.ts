import { sql, type MigrateDownArgs, type MigrateUpArgs } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE "schedule_entries" (
      "id" serial PRIMARY KEY NOT NULL,
      "key" varchar NOT NULL,
      "location_id" varchar NOT NULL,
      "day_id" varchar NOT NULL,
      "sort_order" numeric NOT NULL,
      "time" varchar NOT NULL,
      "group" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "schedule_entries_id" integer;
    CREATE UNIQUE INDEX "schedule_entries_key_idx" ON "schedule_entries" USING btree ("key");
    CREATE INDEX "schedule_entries_updated_at_idx" ON "schedule_entries" USING btree ("updated_at");
    CREATE INDEX "schedule_entries_created_at_idx" ON "schedule_entries" USING btree ("created_at");
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_schedule_entries_fk" FOREIGN KEY ("schedule_entries_id") REFERENCES "public"."schedule_entries"("id") ON DELETE cascade ON UPDATE no action;
    CREATE INDEX "payload_locked_documents_rels_schedule_entries_id_idx" ON "payload_locked_documents_rels" USING btree ("schedule_entries_id");
  `);
  await db.execute(sql`
    INSERT INTO "schedule_entries" ("key", "location_id", "day_id", "sort_order", "time", "group") VALUES
      ('pm19-mon-kids-8-11', 'prospekt-myru-19', 'monday', 0, '16:30', 'Діти 8–11'),
      ('pm19-mon-veterans', 'prospekt-myru-19', 'monday', 1, '18:30', 'Ветерани'),
      ('pm19-tue-kids-8-11-morning', 'prospekt-myru-19', 'tuesday', 0, '09:15', 'Діти 8–11'),
      ('pm19-tue-kids-8-11', 'prospekt-myru-19', 'tuesday', 1, '16:00', 'Діти 8–11'),
      ('pm19-tue-kids-4-7', 'prospekt-myru-19', 'tuesday', 2, '17:30', 'Діти 4–7'),
      ('pm19-wed-kids-8-11', 'prospekt-myru-19', 'wednesday', 0, '16:30', 'Діти 8–11'),
      ('pm19-wed-veterans', 'prospekt-myru-19', 'wednesday', 1, '18:30', 'Ветерани'),
      ('pm19-thu-kids-8-11-morning', 'prospekt-myru-19', 'thursday', 0, '09:15', 'Діти 8–11'),
      ('pm19-thu-kids-8-11', 'prospekt-myru-19', 'thursday', 1, '16:00', 'Діти 8–11'),
      ('pm19-thu-kids-4-7', 'prospekt-myru-19', 'thursday', 2, '17:30', 'Діти 4–7'),
      ('pm19-fri-kids-8-11', 'prospekt-myru-19', 'friday', 0, '16:30', 'Діти 8–11'),
      ('pm19-sat-kids-4-7', 'prospekt-myru-19', 'saturday', 0, '10:30', 'Діти 4–7'),
      ('pm19-sat-kids-8-11', 'prospekt-myru-19', 'saturday', 1, '12:00', 'Діти 8–11'),
      ('pm19-sat-veterans', 'prospekt-myru-19', 'saturday', 2, '14:00', 'Ветерани'),
      ('v37-mon-kids-8-11', 'vyshyvanka-37', 'monday', 0, '16:30', 'Діти 8–11'),
      ('v37-mon-juniors', 'vyshyvanka-37', 'monday', 1, '18:00', 'Юніори'),
      ('v37-tue-kids-8-11-morning', 'vyshyvanka-37', 'tuesday', 0, '09:15', 'Діти 8–11'),
      ('v37-tue-kids-8-11', 'vyshyvanka-37', 'tuesday', 1, '16:00', 'Діти 8–11'),
      ('v37-tue-kids-4-7', 'vyshyvanka-37', 'tuesday', 2, '17:30', 'Діти 4–7'),
      ('v37-tue-adults', 'vyshyvanka-37', 'tuesday', 3, '19:30', 'Дорослі'),
      ('v37-wed-kids-8-11', 'vyshyvanka-37', 'wednesday', 0, '16:30', 'Діти 8–11'),
      ('v37-wed-juniors', 'vyshyvanka-37', 'wednesday', 1, '18:00', 'Юніори'),
      ('v37-thu-kids-8-11-morning', 'vyshyvanka-37', 'thursday', 0, '09:15', 'Діти 8–11'),
      ('v37-thu-kids-8-11', 'vyshyvanka-37', 'thursday', 1, '16:00', 'Діти 8–11'),
      ('v37-thu-kids-4-7', 'vyshyvanka-37', 'thursday', 2, '17:30', 'Діти 4–7'),
      ('v37-thu-adults', 'vyshyvanka-37', 'thursday', 3, '19:30', 'Дорослі'),
      ('v37-fri-kids-8-11', 'vyshyvanka-37', 'friday', 0, '16:30', 'Діти 8–11'),
      ('v37-fri-juniors', 'vyshyvanka-37', 'friday', 1, '19:00', 'Юніори'),
      ('v37-fri-adults', 'vyshyvanka-37', 'friday', 2, '19:00', 'Дорослі'),
      ('v37-sat-kids-4-7', 'vyshyvanka-37', 'saturday', 0, '10:30', 'Діти 4–7'),
      ('v37-sat-kids-8-11', 'vyshyvanka-37', 'saturday', 1, '12:00', 'Діти 8–11'),
      ('v37-sat-juniors', 'vyshyvanka-37', 'saturday', 2, '14:00', 'Юніори'),
      ('v37-sat-adults', 'vyshyvanka-37', 'saturday', 3, '14:00', 'Дорослі');
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_schedule_entries_fk";
    DROP INDEX "payload_locked_documents_rels_schedule_entries_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "schedule_entries_id";
    DROP TABLE "schedule_entries";
  `);
}
