const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} is equal to ${inspect(expected)}.`);
  } else {
    console.log(`🛑 ${inspect(actual)} is not equal to ${inspect(expected)}.`);
  }
};

module.exports = { assertObjectsEqual };
