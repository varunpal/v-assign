module.exports = function () {
  var args = arguments,
    source = arguments[0],
    index,
    keys,
    keyIndex;
  if (source && arguments.length > 1) {
    for (index = 1; index < arguments.length; index++) {
      if (arguments[index] && typeof arguments[index] === 'object') {
        keys = Object.keys(arguments[index]);
        console.log("keys are: ", keys);
        for (keyIndex = 0; keyIndex < keys.length; keyIndex++) {
          console.log("Adding key: ", keys[keyIndex]);
          source[keys[keyIndex]] = arguments[index][keys[keyIndex]];
        }
      }
    }
  }
};