const { assertArraysEqual } = require("../assertArraysEqual");
const { flatten } = require("../flatten");

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["abc", 5, ["sc", 0, 1], "4", [7], [8, "c"]]), [
  "abc",
  5,
  "sc",
  0,
  1,
  "4",
  7,
  8,
  "c"
]);
