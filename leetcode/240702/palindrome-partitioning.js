/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const temp = [];
  const res = [];

  function backtrack(i) {
    if (i === s.length) {
      res.push([...temp]);
      return;
    }

    for (let j = i + 1; j <= s.length; j++) {
      const newSegment = s.slice(i, j);
      if (!isValidPalindrome(newSegment)) continue;

      temp.push(newSegment);
      backtrack(i + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return res;

  function isValidPalindrome(word) {
    for (let i = 0; i <= Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - i - 1]) return false;
    }

    return true;
  }
};
