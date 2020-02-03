const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

let words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
words = ["abc"];
console.log(tail(words));
assertEqual(words.length, 1);
words = [];
console.log(tail(words));
assertEqual(words.length, 0);
