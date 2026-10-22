import assert from "node:assert/strict";
import { test } from "node:test";

import { Prices } from "../src/collections/Prices.ts";

test("Prices mutations require a Payload administrator", () => {
  for (const action of ["create", "update", "delete"]) {
    assert.equal(Prices.access[action]({ req: { user: null } }), false);
    assert.equal(Prices.access[action]({ req: { user: { collection: "visitors" } } }), false);
    assert.equal(Prices.access[action]({ req: { user: { collection: "admins" } } }), true);
  }
  assert.equal(Prices.access.read({}), true);
  for (const name of ["key", "kind", "sortOrder"]) {
    const field = Prices.fields.find((item) => item.name === name);
    assert.equal(field.access.update({}), false);
  }
});

test("Prices reject blank and overlong edited values", () => {
  for (const name of ["title", "priceLabel"]) {
    const field = Prices.fields.find((item) => item.name === name);
    assert.notEqual(field.validate("   "), true);
    assert.notEqual(field.validate("x".repeat(name === "title" ? 101 : 61)), true);
    assert.equal(field.validate("1400 грн/м"), true);
  }
});
