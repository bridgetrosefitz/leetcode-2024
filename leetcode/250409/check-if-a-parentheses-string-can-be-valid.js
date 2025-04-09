/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  let n = s.length;

  if (n % 2 !== 0) {
    return false;
  }

  let openBrackets = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(" || locked[i] === "0") {
      openBrackets += 1;
    } else if (openBrackets > 0) {
      openBrackets -= 1;
    } else {
      return false;
    }
  }

  let closeBrackets = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === ")" || locked[i] === "0") {
      closeBrackets += 1;
    } else if (closeBrackets > 0) {
      closeBrackets -= 1;
    } else {
      return false;
    }
  }

  return true;
};
