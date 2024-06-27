function letterCombinations(digits) {
  const ans = [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length === 0) return [];

  function backtrack(currString, digitIndex) {
    if (currString.length === digits.length) {
      ans.push(currString);
      return;
    }

    const digit = digits[digitIndex];

    for (const ch of map[digit]) {
      backtrack(currString + ch, digitIndex + 1);
    }

    currString = currString.slice(0, -1);
  }

  backtrack("", 0);
  return ans;
}
