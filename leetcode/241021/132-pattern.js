/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const stack = [];
  let secondLargestNumber = -Infinity;
  // this should be as big as possible, so we can maximize our chances
  // of finding a smaller number as we go left

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < secondLargestNumber) return true;

    while (stack.length && stack[stack.length - 1] < nums[i]) {
      // find a number on the stack which is smaller than the curr el
      // aka, the curr el can be our largest number
      secondLargestNumber = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;

  // [1,2,3,4]
  // // smallest, biggest, middle

  // [3,1,4,2]
  // // we don't care about 3, because 1 is smaller
  // // 4 is bigger than 1, so we're good so far. Store min (which is 1)

  // [-1,3,2,0]
  // //
};
