// npm test: the dairy planner's licence tiers, pasteurizer sizing, ice bank choice and yields
import assert from "node:assert/strict";
import { iceBank, licence, pasteuriser, yields } from "./dairy.ts";

assert.equal(licence(500).name, "Registration");
assert.equal(licence(500).next.name, "State licence");
assert.equal(licence(501).name, "State licence");
assert.equal(licence(50000).name, "State licence");
assert.equal(licence(50001).name, "Central licence");
assert.equal(licence(50001).next, undefined);

assert.deepEqual(pasteuriser(10000, 8), { lines: 1, lph: 1250 });
assert.deepEqual(pasteuriser(10001, 8), { lines: 1, lph: 1300 });
assert.deepEqual(pasteuriser(500000, 8), { lines: 3, lph: 20850 });

assert.equal(iceBank(999), "none");
assert.equal(iceBank(1000), "freon");
assert.equal(iceBank(10000), "either");
assert.equal(iceBank(20000), "either");
assert.equal(iceBank(20001), "ammonia");
assert.equal(iceBank(500001), "large");

const y = yields(1000, "buffalo");
assert.equal(Math.round(y.ghee), 48);
assert.deepEqual(y.paneer.map(Math.round), [175, 227]);

console.log("dairy planner ok");
