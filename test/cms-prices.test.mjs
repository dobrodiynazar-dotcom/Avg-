import assert from "node:assert/strict";
import { test } from "node:test";

import { Prices } from "../src/collections/Prices.ts";
import { parsePriceInput } from "../src/lib/prices.ts";

const rawHook = Prices.hooks.beforeOperation[0];
const validateHook = Prices.hooks.beforeValidate[0];
const admin = { collection: "admins" };

test("Prices mutations require a Payload administrator", () => {
  for (const action of ["create", "update", "delete"]) {
    assert.equal(Prices.access[action]({ req: { user: null } }), false);
    assert.equal(Prices.access[action]({ req: { user: { collection: "visitors" } } }), false);
    assert.equal(Prices.access[action]({ req: { user: admin } }), true);
  }
  assert.equal(Prices.access.read({}), true);
  for (const name of ["key", "kind", "sortOrder"]) {
    const field = Prices.fields.find((item) => item.name === name);
    assert.equal(field.access.update({}), false);
  }
});

test("Prices accept only exact positive amounts with at most two decimal places", () => {
  for (const [input, expected] of [["1400", 1400], ["750", 750], ["1400.50", 1400.5], ["1400,50", 1400.5], ["0.01", 0.01], ["0004,5", 4.5], [2000, 2000]]) {
    assert.equal(parsePriceInput(input), expected, String(input));
    assert.equal(parsePriceInput(parsePriceInput(input)), expected, `numeric round trip: ${input}`);
  }
  for (const input of ["", " ", "1400 грн", "1400 грн/місяць", "1 400 грн", "-1", -1, 0, "0", "1.234", "1,234", "1e3", "1+2", "1.", ".5", " 1400", "1400 ", "Infinity", Infinity, NaN, null, undefined, true, [], {}, "90071992547409.90", "90071992547409.91", "9007199254740991"]) {
    assert.equal(parsePriceInput(input), null, String(input));
  }
});

test("Raw hook validates before Payload can truncate number strings", () => {
  for (const operation of ["create", "update"]) {
    for (const price of ["1400 грн", "1 400 грн", "1.234", "1e3", "", null, -1]) {
      assert.throws(() => rawHook({ args: { data: { price } }, operation, req: {} }), (error) => error.status === 400 && error.data.errors[0].path === "price");
    }
    const args = { data: { price: "1400,50" } };
    assert.equal(rawHook({ args, operation, req: {} }).data.price, 1400.5);
  }
  assert.throws(() => rawHook({ args: { data: { price: 0 } }, operation: "create", req: {} }));
  assert.doesNotThrow(() => rawHook({ args: { data: {} }, operation: "update", req: {} }));
  assert.doesNotThrow(() => rawHook({ args: { data: null }, operation: "update", req: {} }));
});

test("CREATE assigns its own stable key and appends inside the requested section", async () => {
  const calls = [];
  const req = { user: admin, payload: { find: async (options) => { calls.push(options); return { docs: [{ sortOrder: 7 }] }; } } };
  const first = await validateHook({ operation: "create", data: { kind: "personal", title: "  Нове тренування  ", price: 750, key: "forged", sortOrder: -99 }, req });
  const second = await validateHook({ operation: "create", data: { kind: "personal", title: "Нове тренування", price: 750 }, req });
  assert.match(first.key, /^[\da-f-]{36}$/);
  assert.notEqual(first.key, second.key);
  assert.equal(first.sortOrder, 8);
  assert.equal(first.title, "Нове тренування");
  assert.equal(calls[0].where.kind.equals, "personal");
  assert.equal(calls[0].overrideAccess, false);
  assert.equal(calls[0].user, admin);
  assert.equal(calls[0].req, req);
  const empty = await validateHook({ operation: "create", data: { kind: "single", price: 300 }, req: { user: admin, payload: { find: async () => ({ docs: [] }) } } });
  assert.equal(empty.sortOrder, 0);
});

test("Only the existing veterans card retains its fixed free price", async () => {
  const originalDoc = { key: "veterans", price: 0 };
  assert.equal((await validateHook({ operation: "update", originalDoc, data: { title: "Група ветеранів", price: 0 }, req: {} })).price, 0);
  await assert.rejects(validateHook({ operation: "update", originalDoc, data: { price: 1400 }, req: {} }), (error) => error.status === 400);
  await assert.rejects(validateHook({ operation: "update", originalDoc: { key: "adults", price: 1400 }, data: { price: 0 }, req: {} }), (error) => error.status === 400);
});

test("Prices reject blank and overlong titles", () => {
  const field = Prices.fields.find((item) => item.name === "title");
  assert.notEqual(field.validate("   "), true);
  assert.notEqual(field.validate("x".repeat(101)), true);
  assert.equal(field.validate("Доросла група"), true);
});
