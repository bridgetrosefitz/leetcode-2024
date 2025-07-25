/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /*

  
"bbaabb"
>> "bb", "aa", "bb", "baab", "bbaabb"

"bbaaabb"
>> "bb", "aa", "aa", "aaa", bb", "baaab", "bbaaabb"

  "abcbzbc"
    i
         j
  >> * all the single chs (x7)*
  >> "bcb", "bzb", "cbzbc" 
  
  BRUTE FORCE
  // for every ch, check every substring
  // run 'is palindrome' on substring (O(length of substring))
  // time n^3

  // for every 'middle'
  // check left and right, and increment until boundaries or false >> recursively?


  */

  let res = 0;

  function outerStrIsPalindrome(start, end) {
    // two reasons you dont continue - we hit a boundary, or they're not equal
    if (start < 0 || end >= s.length) {
      return false;
    }

    if (s[start] !== s[end]) {
      return false;
    }

    res += 1;
    outerStrIsPalindrome(start - 1, end + 1);
  }

  for (let i = 0; i < s.length; i++) {
    outerStrIsPalindrome(i, i);
    outerStrIsPalindrome(i, i + 1);
  }

  return res;
};
