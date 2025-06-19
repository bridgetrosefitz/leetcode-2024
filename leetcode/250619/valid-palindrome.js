/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /*
  
  abc
  L
    R
  aba
   L 
    R

  abba
    L
    R

  ""

  amanaLplanacanalpRanama
    L
                    R

  a
  A

  a
  ;

  a
  b
  
  */

  let left = 0;
  let right = s.length - 1;
  const numbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  while (left < right) {
    // if not alpha, skip
    if (
      s[left].toLowerCase() === s[left].toUpperCase() &&
      !numbers.has(s[left])
    ) {
      left++;
      continue;
    }

    if (
      s[right].toLowerCase() === s[right].toUpperCase() &&
      !numbers.has(s[right])
    ) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
