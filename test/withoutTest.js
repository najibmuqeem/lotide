const { assertArraysEqual } = require("../assertArraysEqual");
const { without } = require("../without");

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([0, "3", 23, "abc"], [0, "abc"]), ["3", 23]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
