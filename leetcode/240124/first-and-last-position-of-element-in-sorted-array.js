/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }

  // first place where num is >= target
  // first place where it's > target (and make this -1)

  // if result of both tests is the same number, we've never EQUALLED the target, so it doesn't exist
  let indexOfFirstInstance = 0;
  let indexOfLastInstance = nums.length - 1;

  let left = 0;
  let right = nums.length - 1;
  let smallestSoFar = nums.length;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const number = nums[mid];

    if (number >= target) {
      smallestSoFar = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  indexOfFirstInstance = smallestSoFar;
  smallestSoFar = nums.length;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const number = nums[mid];

    if (number > target) {
      smallestSoFar = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  indexOfLastInstance = smallestSoFar;

  if (indexOfFirstInstance === indexOfLastInstance) {
    return [-1, -1];
  }

  return [indexOfFirstInstance, indexOfLastInstance - 1];
};
