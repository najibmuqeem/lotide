const { assertArraysEqual } = require("../assertArraysEqual");
const { takeUntil } = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log("---");

const data3 = [1, 2, 3, 4, 5, "six", 7, 8, 9];
const results3 = takeUntil(data3, x => !Number.isInteger(x));
assertArraysEqual(results3, [1, 2, 3, 4, 5]);
