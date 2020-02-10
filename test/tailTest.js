const { tail } = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it('returns  ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });

  it('returns  empty array for ["abc"]', () => {
    assert.deepEqual(tail(["abc"]), []);
  });

  it("returns  empty array for empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
