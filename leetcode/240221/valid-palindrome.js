/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // map of letters and 0-9
  // pointer at start and end
  // run toLowerCase on every character
  // if character is not alphanumeric, increment
  // if left /= right, return false

  const alphaNumeric = new Set();
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  letters.map(letter => alphaNumeric.add(letter));
  numbers.map(number => alphaNumeric.add(number.toString()));

  let left = 0;
  right = s.length - 1;

  while (left < right) {
    const leftChar = s[left].toLowerCase();
    const rightChar = s[right].toLowerCase();
    const leftCharIsValid = alphaNumeric.has(leftChar);
    const rightCharIsValid = alphaNumeric.has(rightChar);

    if (!leftCharIsValid || !rightCharIsValid) {
      if (!leftCharIsValid) left++;
      if (!rightCharIsValid) right--;
      continue;
    } else if (leftChar !== rightChar) return false;

    left++;
    right--;
  }

  return true;
};
