function isPalindrome(word) {
  //   expect that smaller version of word is palindrome
  //   test outer characters

  if (word.length <= 1) return true;
  if (word[0] !== word[word.length - 1]) return false;
  return isPalindrome(word.substr(1, word.length - 2));
}
