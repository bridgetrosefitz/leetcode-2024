/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstIndex = -1;
  let lastIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      if (nums[mid] === target) firstIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // if there is only one element, return firstIndex as lastIndex also
  if (firstIndex === nums.length - 1) return [firstIndex, firstIndex];

  // if target is not present in the array (no need to go further)
  if (firstIndex === -1) return [firstIndex, lastIndex];

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      lastIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // if there is no element greater than target, return last index in array
  if (lastIndex === -1) return [firstIndex, nums.length - 1];

  return [firstIndex, lastIndex - 1];
};
