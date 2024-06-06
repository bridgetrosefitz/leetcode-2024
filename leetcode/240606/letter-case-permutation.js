/**
 * @param {string} s
 * @return {string[]}
 */

// "a2b"
function letterCasePermutation(s) {
  const res = []; // ["a2b", "a2B"]
  // curr = [A, 2]
  function backtrack(curr, i) {
    // curr[i] = a
    if (curr.length === s.length) {
      res.push(curr.join(""));
      return;
    }

    const lowerCase = s[i].toLowerCase(); // a
    const upperCase = s[i].toUpperCase(); // A

    curr.push(lowerCase);
    backtrack(curr, i + 1);
    curr.pop();

    if (lowerCase !== upperCase) {
      curr.push(upperCase);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }

  backtrack([], 0);

  return res;
}
