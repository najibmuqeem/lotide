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

const middle = function(arr) {
  let nums = [];
  let middleIndex = Math.floor((arr.length - 1) / 2);
  if (middleIndex !== 0) {
    if (arr.length % 2 === 1) {
      nums.push(arr[middleIndex]);
    } else {
      nums.push(arr[middleIndex]);
      nums.push(arr[middleIndex + 1]);
    }
  }
  return nums;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
