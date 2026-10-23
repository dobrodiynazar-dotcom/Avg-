import assert from "node:assert/strict";
import { test } from "node:test";

import { ScheduleEntries } from "../src/collections/ScheduleEntries.ts";
import { scheduleLocationSchedules } from "../src/content/schedule.ts";

const admin = { collection: "admins" };
const field = (name) => ScheduleEntries.fields.find((item) => item.name === name);

test("Schedule mutations require a Payload administrator and cannot move existing entries", () => {
  for (const action of ["create", "update", "delete"]) {
    assert.equal(ScheduleEntries.access[action]({ req: { user: null } }), false);
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
  const req = { user: admin, payload: { find: async () => ({ docs: [{ sortOrder: 3 }] }) } };
  await assert.rejects(hook({ data: { locationId: "other", dayId: "monday" }, operation: "create", req }));
  const data = await hook({ data: { locationId: "vyshyvanka-37", dayId: "friday", time: "19:00", group: "  Дорослі  ", key: "forged", sortOrder: -1 }, operation: "create", req });
  assert.match(data.key, /^[\da-f-]{36}$/);
  assert.equal(data.sortOrder, 4);
  assert.equal(data.group, "Дорослі");
});
