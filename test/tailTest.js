const { assertArraysEqual } = require("../assertArraysEqual");
const { tail } = require("../tail");

let words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
words = ["abc"];
assertArraysEqual(tail(words), []);
words = [];
assertArraysEqual(tail(words), []);
