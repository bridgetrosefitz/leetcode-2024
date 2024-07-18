function combinations(digits) {
  const temp = [];
  const res = [];

  const lettersLookup = {
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

  function backtrack(digitIndex) {
    if (temp.length === digits.length) {
      res.push(temp.join(""));
      return;
    }

    const digit = digits[digitIndex];
    const chars = lettersLookup[digit];

    for (let i = 0; i < chars.length; i++) {
      temp.push(chars[i]);
      backtrack(digitIndex + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return res;
}
