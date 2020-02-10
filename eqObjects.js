const { eqArrays } = require("./eqArrays");

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

module.exports = { eqObjects };
