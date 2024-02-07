var letterCombinations = function (digits) {
  const res = [];
  const digitToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  const backtrack = (i, currStr) => {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }

    for (char of digitToChar[digits[i]]) {
      backtrack(i + 1, currStr + char);
    }
  };
  if (digits) backtrack(0, "");
  return res;
};
