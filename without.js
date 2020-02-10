const without = function(source, itemsToRemove) {
  let result = [];
  let remove = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (!remove) {
      result.push(source[i]);
    }
    remove = false;
  }
  return result;
};

module.exports = { without };
