/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // if length 0, return ""
  // find shortest character
  // compare prefix to each word
  // take one letter off prefix until prefix is at index 0
  // return prefix

  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < prefix) {
      prefix = strs[i];
    }
  }

  for (let i = 0; i < strs.length; i++) {
    while (!hasPrefix(strs[i], prefix) && prefix.length > 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  function hasPrefix(word, prefix) {
    for (let i = 0; i < prefix.length; i++) {
      if (word[i] !== prefix[i]) return false;
    }

    return true;
  }

  return prefix;
};
