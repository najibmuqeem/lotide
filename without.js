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

const assertArraysEqual = function(arr1, arr2) {
  console.log(arr1, arr2);
  if (eqArrays(arr1, arr2)) {
    console.log("✅ The arrays are equal.");
  } else {
    console.log("🛑 The arrays are not equal.");
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  let remove = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (!remove) {
      result.push(source[i]);
    }
    remove = false;
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([0, "3", 23, "abc"], [0, "abc"]), ["3", 23]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
