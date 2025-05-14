/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // pass with right skip

  let left = 0;
  let right = s.length - 1;
  let hasSkipped = false; // false true false true

  // "abac"
  // "caba"
  // L
  //   R

  while (left < right) {
    if (s[left] !== s[right]) {
      // if hasSkipped is false, move right pointer
      // else, break
      if (!hasSkipped) {
        right--;
        hasSkipped = true;
        continue;
      } else {
        break;
      }
    }

    right--;
    left++;
  }

  // TO DO: check if we've achieved palindrome (based on where pointers are?)
  if (left >= right) {
    return true;
  }
  // pass with left skip
  left = 0;
  right = s.length - 1;
  hasSkipped = false;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (!hasSkipped) {
        left++;
        hasSkipped = true;
        continue;
      } else {
        return false;
      }
    }

    right--;
    left++;
  }

  return true;
};
