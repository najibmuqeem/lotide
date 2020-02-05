const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
  } else {
    isEqual = false;
  }
  return isEqual;
};
const eqObjects = function(object1, object2) {
  let isTrue = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        isTrue = eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] === object2[key]) {
          isTrue = true;
        }
      }
    }
  }
  return isTrue;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} is equal to ${inspect(expected)}.`);
  } else {
    console.log(`🛑 ${inspect(actual)} is not equal to ${inspect(expected)}.`);
  }
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
assertObjectsEqual({ a: 1, b: 2 }, { a: 2, b: 1 });
