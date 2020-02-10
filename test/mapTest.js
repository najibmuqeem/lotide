const { assertArraysEqual } = require("../assertArraysEqual");
const { map } = require("../map");

let arr = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(
  map(arr, word => word[0]),
  ["g", "c", "t", "m", "t"]
);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assertArraysEqual(
  map(arr, val => val * 2),
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
);

arr = [1, "2", "three", 4, [5], 6];

assertArraysEqual(
  map(arr, item => (Number.isInteger(item) ? item : NaN)),
  [1, NaN, NaN, 4, NaN, 6]
);
