/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function helper(s, left, right) {
    if (left >= right) return;
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
    helper(s, left, right);
  }

  helper(s, 0, s.length - 1);
};
