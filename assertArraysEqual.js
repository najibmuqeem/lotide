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
