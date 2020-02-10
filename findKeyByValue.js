const findKeyByValue = function(obj, val) {
  let key;
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (val === Object.values(obj)[i]) {
      key = Object.keys(obj)[i];
    }
  }
  return key;
};

module.exports = { findKeyByValue };
