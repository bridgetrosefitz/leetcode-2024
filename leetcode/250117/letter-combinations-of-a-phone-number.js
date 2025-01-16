/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  const res = [];
  let temp = [];

  const lookup = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  /*
    "23"

    */

  // res = ["ad","ae"]
  // temp = ["b",]
  function buildWords(i) {
    // "23"
    // i = 0 1
    if (i === digits.length) {
      res.push(temp.join(""));
      return;
    }

    const currDigit = digits[i]; // 2 3

    const possibleLetters = lookup[currDigit]; // "abc" "def"

    for (const letter of possibleLetters) {
      // "b"
      temp.push(letter);
      buildWords(i + 1);
      temp.pop();
    }
  }

  buildWords(0);

  return res;
};
