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

  if (str1.length > str2.length) {
    shortStringLength = str2.length;
    shortString = str2;
    longStringLength = str1.length;
    longString = str1;
  } else {
    shortStringLength = str1.length;
    shortString = str1;
    longStringLength = str2.length;
    longString = str2;
  }

  for (let i = 0; i < longStringLength; i++) {
    if (longString[i] !== shortString[shortStringPointer]) {
      return "";
    }

    if (shortStringPointer === shortStringLength - 1) {
      shortStringPointer = 0;
    } else {
      shortStringPointer++;
    }

    // if str2 from i to i + str1.length
    // do it with a loop
    // do it using substr method
    // str1.substring(i, XXX)
    // compare time complexity of these
  }

  if (shortStringPointer !== 0) {
    return "";
  }

  return shortString;

  // when you're trying the small substring to check, immediately do a check to see if it divides
};
