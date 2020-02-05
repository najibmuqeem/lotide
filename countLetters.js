const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let obj = {};
  let noSpaces = str
    .split(" ")
    .join("")
    .toLowerCase();
  for (const letter of noSpaces) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }
  return obj;
};

assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").t, 2);
assertEqual(countLetters("lighthouse in the house").o, 2);
assertEqual(countLetters("lighthouse in the house").u, 2);
assertEqual(countLetters("lighthouse in the house").s, 2);
assertEqual(countLetters("lighthouse in the house").e, 3);
assertEqual(countLetters("lighthouse in the house").n, 1);
