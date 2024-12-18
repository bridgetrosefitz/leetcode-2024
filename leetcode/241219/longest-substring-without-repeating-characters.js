/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /** 
    Inputs:
    - type, length, hostile
    - str
    - 0 - many characters
    - lower case, upper case, symbols, spaces, digits

    Outputs:
    - type, length, mutate
    - int (length of max string without repeating)

    Time: O(n)
    Space: O(1) > number of possible ch, which is independent of str length
    
    Tests:
    [   ["abcab",[X]],
        ["", [X]],
        ["$m$", [X]],
        [45a, [X]],

    ]

    Examples:

    seen = {
        a: 1,
        b: 1,
        c: 1,
    }
     */

  const seen = {}; // {a: 1, b: 1, c: 1}
  let left = 0; // 2
  let maxWindow = 0; // 3
  for (let right = 0; right < s.length; right++) {
    // right = 4
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
