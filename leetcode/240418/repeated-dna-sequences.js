var findRepeatedDnaSequences = function (s) {
  const ans = new Set();
  for (let i = 0; i < s.length; i++) {
    const currentString = s.slice(i, i + 10);

    for (let j = i + 1; j < s.length; j++) {
      if (s.slice(j, j + 10) === currentString) {
        ans.add(currentString);
        break;
      }
    }
  }

  return Array.from(ans);
};
