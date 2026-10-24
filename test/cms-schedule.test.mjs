import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { buildConfig, getPayload } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

import { ScheduleEntries } from "../src/collections/ScheduleEntries.ts";
import { scheduleLocationSchedules } from "../src/content/schedule.ts";

const admin = { collection: "admins" };
const field = (name) => ScheduleEntries.fields.find((item) => item.name === name);

test("Payload rejects anonymous Schedule mutations before touching the database", async () => {
  const config = buildConfig({
    secret: "schedule-permissions-test-only-secret",
    collections: [ScheduleEntries],
    db: postgresAdapter({ pool: { connectionString: "" } }),
    typescript: { autoGenerate: false },
  });
  const payload = await getPayload({ config, disableDBConnect: true, disableOnInit: true });
  try {
    const options = { collection: "schedule-entries", overrideAccess: false, disableTransaction: true };
    for (const action of [
      () => payload.create({ ...options, data: { locationId: "prospekt-myru-19", dayId: "monday", time: "16:30", group: "QA" } }),
      () => payload.update({ ...options, id: 1, data: { group: "QA" } }),
      () => payload.delete({ ...options, id: 1 }),
    ]) await assert.rejects(action, (error) => error.status === 403);
  } finally {
    await payload.destroy();
  }
});

test("Schedule mutations require a Payload administrator and cannot move existing entries", () => {
  for (const action of ["create", "update", "delete"]) {
    assert.equal(ScheduleEntries.access[action]({ req: { user: null } }), false);
    assert.equal(ScheduleEntries.access[action]({ req: { user: { collection: "visitors" } } }), false);
    assert.equal(ScheduleEntries.access[action]({ req: { user: admin } }), true);
  }
  assert.equal(ScheduleEntries.access.read({}), true);
  for (const name of ["key", "locationId", "dayId", "sortOrder"]) {
    assert.equal(field(name).access.update({}), false);
  }
});

test("Schedule accepts only real weekdays and locations, valid times, and named groups", async () => {
  assert.equal(scheduleLocationSchedules.length, 2);
  assert.ok(scheduleLocationSchedules.every((location) => location.days.length === 6));
  for (const value of ["00:00", "09:15", "23:59"]) assert.equal(field("time").validate(value), true);
  for (const value of ["24:00", "9:15", "12:60", "12:30 extra", ""]) assert.notEqual(field("time").validate(value), true);
  assert.notEqual(field("group").validate("   "), true);
  assert.notEqual(field("group").validate("x".repeat(101)), true);
  assert.notEqual(field("locationId").validate("other"), true);
  assert.notEqual(field("dayId").validate("sunday"), true);
  const hook = ScheduleEntries.hooks.beforeValidate[0];
  const calls = [];
  const req = { user: admin, payload: { find: async (options) => { calls.push(options); return { docs: [{ sortOrder: 3 }] }; } } };
  await assert.rejects(hook({ data: { locationId: "other", dayId: "monday" }, operation: "create", req }));
  const data = await hook({ data: { locationId: "vyshyvanka-37", dayId: "friday", time: "19:00", group: "  Дорослі  ", key: "forged", sortOrder: -1 }, operation: "create", req });
  assert.match(data.key, /^[\da-f-]{36}$/);
  assert.equal(data.sortOrder, 4);
  assert.equal(data.group, "Дорослі");
  assert.deepEqual(calls[0].where.and, [{ locationId: { equals: "vyshyvanka-37" } }, { dayId: { equals: "friday" } }]);
  assert.equal(calls[0].overrideAccess, false);
  assert.equal(calls[0].user, admin);
});

test("Every migrated training maps to an existing location/day, including duplicate times", () => {
  const source = readFileSync(new URL("../src/migrations/20261023_120000_schedule_entries.ts", import.meta.url), "utf8");
  const rows = [...source.matchAll(/\('([^']+)', '([^']+)', '([^']+)', (\d+), '([^']+)', '([^']+)'\)/g)]
    .map(([, key, locationId, dayId, sortOrder, time, group]) => ({ key, locationId, dayId, sortOrder: Number(sortOrder), time, group }));
  assert.equal(rows.length, 33);
  for (const row of rows) {
    const location = scheduleLocationSchedules.find(({ id }) => id === row.locationId);
    assert.ok(location?.days.some(({ id }) => id === row.dayId), row.key);
  }
  assert.equal(rows.filter(({ locationId }) => locationId === "prospekt-myru-19").length, 14);
  assert.equal(rows.filter(({ locationId }) => locationId === "vyshyvanka-37").length, 19);
  const friday = rows.filter(({ locationId, dayId }) => locationId === "vyshyvanka-37" && dayId === "friday").sort((a, b) => a.sortOrder - b.sortOrder);
  assert.deepEqual(friday.map(({ time }) => time), ["16:30", "19:00", "19:00"]);
});
