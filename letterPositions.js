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

const letterPositions = function(sentence) {
  let results = {};
  let noSpaces = sentence
    .split(" ")
    .join("")
    .toLowerCase();

  for (let i = 0; i < noSpaces.length; i++) {
    //add keys signifying each letter and set each letter's value to an empty array
    if (!results[noSpaces[i]]) {
      results[noSpaces[i]] = [];
    }
  }

  for (let j = 0; j < noSpaces.length; j++) {
    //loop through the letters in the sentence and adds the current index to its specified key
    results[noSpaces[j]].push(j);
  }

  return results;
};

assertArraysEqual(letterPositions("heelllo").e, [1, 2]);
assertArraysEqual(letterPositions("heelllo").h, [0]);
assertArraysEqual(letterPositions("heelllo").l, [3, 4, 5]);
assertArraysEqual(letterPositions("heelllo").o, [6]);
