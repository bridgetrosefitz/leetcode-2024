// Example 1: Given a string s, return true if it is a palindrome, false otherwise.

// A string is a palindrome if it reads the same forward as backward.
// That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

const checkIfPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

// Example 2: Given a sorted array of unique integers
// and a target integer, return true if there exists
// a pair of numbers that sum to target, false otherwise.

// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

const checkForTarget = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return true;
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};
