const middle = function(arr) {
  let nums = [];
  let middleIndex = Math.floor((arr.length - 1) / 2);
  if (middleIndex !== 0) {
    if (arr.length % 2 === 1) {
      nums.push(arr[middleIndex]);
    } else {
      nums.push(arr[middleIndex]);
      nums.push(arr[middleIndex + 1]);
    }
  }
  return nums;
};

module.exports = { middle };
