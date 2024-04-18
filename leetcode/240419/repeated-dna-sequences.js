/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const sequences = new Set();
  const ans = new Set();

  for (let i = 0; i < s.length; i++) {
    const current = s.slice(i, i + 10);
    if (sequences.has(current)) {
      ans.add(current);
    }
    sequences.add(current);
  }

  return Array.from(ans);
};
