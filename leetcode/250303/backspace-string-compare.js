/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function getFinalString(s) {
    const stack = [];

    for (const ch of s) {
      if (ch !== "#") {
        stack.push(ch);
      } else {
        stack.pop();
      }
    }

    return stack.join("");
  }

  const resS = getFinalString(s);
  const resT = getFinalString(t);

  return resS === resT;
};
