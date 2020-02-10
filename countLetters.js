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

module.exports = { countLetters };
