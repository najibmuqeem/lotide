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

const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  console.log(output);
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["abc", 5, ["sc", 0, 1], "4", [7], [8, "c"]]), [
  "abc",
  5,
  "sc",
  0,
  1,
  "4",
  7,
  8,
  "c"
]);
