const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let key;
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (val === Object.values(obj)[i]) {
      key = Object.keys(obj)[i];
    }
  }
  return key;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
