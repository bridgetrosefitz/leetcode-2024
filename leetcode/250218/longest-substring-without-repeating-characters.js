/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const seen = {};
  let left = 0;
  let maxWindow = 0;

  for (let right = 0; right < s.length; right++) {
    const newCh = s[right];
    seen[newCh] = (seen[newCh] || 0) + 1;

    while (seen[newCh] > 1) {
      const removedCh = s[left];
      left++;
      seen[removedCh]--;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
};
