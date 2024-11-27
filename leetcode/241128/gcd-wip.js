/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // get the gcd of lengths >> import library
  // the only substrings I have to check are the ones that divide the gcd

  // if something divides a string, it's a bunch of copies of it
  d = "";
  // if d is the divisor, str1 is a set of copies of d, as is str2
  // str1 = "abab"  // str2 = "ababab"
  // d = "ab"
  // >> you'll have one or multiple copies of the divisor left
  // str1 will always be in str2; aka str1 is a substring of str2 if they have a DCA

  // str1 = "abab"  // str2 = "ababababc"
  // divide str1 into str2
  // see what's left
  // what's left has to be the DCA of str1 and str2
  // EUCLIDIAN ALGORITHM

  // "abab" "ababab"
  // look at the smaller one, then keep subdividing and testing to see if it goes evenly into longer string
  // jump for-loop

  let shortStringLength;
  let shortString;
  let longString;
  let longStringLength;
  let shortStringPointer = 0;
  let testString = shortString;

  if (str1.length > str2.length) {
    shortString = str2;
    longString = str1;
  } else {
    shortString = str1;
    longString = str2;
  }

  shortString = str1.length < str2.length ? str1 : str2;
  longString = str1.length > str2.length ? str1 : str2;

  len = shortString.length;
  while (len > 0) {
    substr = shortString.substring(0, len);

    // CHECK IF substr IS A GCD
    if (divides(substr, shortString) && divides(substr, longString))
      return substr;

    len -= 1;
  }

  function divides(substr, str) {
    /*
            str = "abcabc"
            substr = "abc"
        */

    for (i = 0; i < str.length; i++) {
      if (str[i] !== substr[i % substr.length]) return false;
    }

    if (i % substr.length !== 0) return false;
    return true;
  }

  // "abab"
  //   |
  // "ababab"
  //       |

  // when you're trying the small substring to check, immediately do a check to see if it divides

  // if str2 from i to i + str1.length
  // do it with a loop
  // do it using substr method
  // str1.substring(i, XXX)
  // compare time complexity of these

  return "";
};
