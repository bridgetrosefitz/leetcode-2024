/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // "()"
  // "{(]"
  // "[[][]]]"
  const lookup = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  const closing = []; //[")"]

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (lookup.has(curr)) {
      closing.push(lookup.get(curr));
    } else if (closing.length && closing.pop() === curr) {
      continue;
    } else {
      return false;
    }
  }

  return closing.length === 0;
};
