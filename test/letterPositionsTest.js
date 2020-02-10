const { assertArraysEqual } = require("../assertArraysEqual");
const { letterPositions } = require("../letterPositions");

assertArraysEqual(letterPositions("heelllo").e, [1, 2]);
assertArraysEqual(letterPositions("heelllo").h, [0]);
assertArraysEqual(letterPositions("heelllo").l, [3, 4, 5]);
assertArraysEqual(letterPositions("heelllo").o, [6]);
