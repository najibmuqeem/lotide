const takeUntil = function(array, callback) {
  let arr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    arr.push(item);
  }
  return arr;
};

module.exports = { takeUntil };
