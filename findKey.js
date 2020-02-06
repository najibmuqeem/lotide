const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} === ${expected}`);
  }
};

const findKey = (obj, cb) => {
  let key = "";
  for (let i in obj) {
    if (cb(obj[i])) {
      key = i;
      break;
    }
  }
  return key;
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  ),
  "noma"
);
assertEqual(
  findKey(
    {
      key1: { ridges: 6, holes: 1 },
      key2: { ridges: 5, holes: 2 },
      key3: { ridges: 6, holes: 1 },
      key4: { ridges: 5, holes: 3 },
      key5: { ridges: 7, holes: 1 },
      key6: { ridges: 6, holes: 2 }
    },
    x => x.ridges === 7
  ),
  "key5"
);
