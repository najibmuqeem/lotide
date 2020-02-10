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

module.exports = { findKey };
