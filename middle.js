const middle = function(arr) {
  let nums = [];
  if (!arr[0]) {
    return arr;
  }
  let middleIndex = Math.floor((arr.length - 1) / 2);
  if (middleIndex !== 0) {
    if (arr.length % 2 === 1) {
      nums.push(arr[middleIndex]);
    } else {
      nums.push(arr[middleIndex]);
      nums.push(arr[middleIndex + 1]);
    }
  } else {
    nums.push(arr[0]);
  }
  return nums;
};

module.exports = { middle };
