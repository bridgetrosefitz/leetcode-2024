/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // left and right pointers, at 0 and length - 1
  // while right is greater than left
  // if total is equal to target, return
  // if total is greater than target, decrement right
  // if total is less than target, increment left
  // REMINDER: return 1-indexed tuple

  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
    const total = numbers[left] + numbers[right];

    if (total === target) {
      return [left + 1, right + 1];
    }

    if (total > target) {
      right--;
    } else {
      left++;
    }
  }
};
