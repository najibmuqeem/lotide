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
  }
  return isEqual;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ The arrays are equal.");
  } else {
    console.log("🛑 The arrays are not equal.");
  }
};
