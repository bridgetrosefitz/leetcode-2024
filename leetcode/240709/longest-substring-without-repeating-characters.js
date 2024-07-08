/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  // keep a set of all ch we've seen

  // move right pointer over every letter
  // if set already has letter at right
  // delete element at left from set
  // increment left

  // add right letter to set
  // update max

  // "abcabcbb"
  //    L
  //      R

  // "bbb"
  //  L
  //  R

  // "abcdbfb"
  //  L
  //   R

  const seen = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    const rightLetter = s[right];

    while (seen.has(rightLetter)) {
      const leftLetter = s[left];
      seen.delete(leftLetter);
      left += 1;
    }

    seen.add(rightLetter);
    max = Math.max(max, right - left + 1);
  }

  return max;
}
