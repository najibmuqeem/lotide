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

module.exports = { letterPositions };
