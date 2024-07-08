/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length <= 2) return s.length;

  const counter = {};
  let max = -Infinity;
  let left = 0;
  const atLeastOne = new Set();

  for (let right = 0; right < s.length; right += 1) {
    const letter = s[right];
    counter[letter] = (counter[letter] || 0) + 1;
    atLeastOne.add(letter);

    while (atLeastOne.size > 2) {
      const leftLetter = s[left];
      counter[leftLetter] -= 1;
      if (counter[leftLetter] === 0) atLeastOne.delete(leftLetter);
      left += 1;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
