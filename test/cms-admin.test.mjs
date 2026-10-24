import assert from "node:assert/strict";
import { test } from "node:test";

import { Admins } from "../src/collections/Admins.ts";

test("CMS admin collection blocks ordinary account creation", () => {
  assert.equal(Admins.access.create({}), false);
  assert.equal(Admins.access.delete({}), false);
  for (const action of ["admin", "read", "update"]) {
    assert.equal(Admins.access[action]({ req: { user: null } }), false);
    assert.equal(Admins.access[action]({ req: { user: { id: 1 } } }), true);
  }
});
