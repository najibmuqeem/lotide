const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  console.log(output);
  return output;
};

module.exports = { flatten };
