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
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length === obj2Keys.length) {
    for (const keyIndex of obj1Keys) {
      if (typeof obj1Keys[keyIndex] === "object") {
        isTrue = eqObjects(obj1Keys[keyIndex], obj2Keys[keyIndex]);
      } else if (Array.isArray(object1[obj1Keys[keyIndex]])) {
        isTrue = eqArrays(
          object1[obj1Keys[keyIndex]],
          object2[obj2Keys[keyIndex]]
        );
      } else {
        if (object1[obj1Keys[keyIndex]] === object2[obj2Keys[keyIndex]]) {
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
