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

const takeUntil = function(array, callback) {
  let arr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    arr.push(item);
  }
  return arr;
};
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
