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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ${arr1} is equal to ${arr2}.`);
  } else {
    console.log(`🛑 ${arr1} is not equal to ${arr2}.`);
  }
};

let arr = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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
