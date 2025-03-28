/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // [2,3]
  if (!digits.length) {
    return [];
  }

  const numberToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const currCombo = []; //[a,d]
  const res = [];

  function buildWord(i) {
    if (currCombo.length === digits.length) {
      res.push(currCombo.join(""));
      return;
    }

    const digit = digits[i];
    const letters = numberToLetters[digit];

    for (const letter of letters) {
      currCombo.push(letter);
      buildWord(i + 1);
      currCombo.pop();
    }
  }

  buildWord(0);

  return res;
};
