/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const res = [];
  const stack = [];
  // two passes from right to left (use length * 2)
  // calculate index (Math.floor)
  // while stack has length
  // if top stack value is less than or equal to current number, pop it
  // if stack has length
  // res[index] is the number at the top of the stack
  // else put -1 at res[index]

  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    // MAYBE YOU DONT NEED * 2 - 1 ... -=2 ?
    // const derivedIndex = i <= nums.length ? Math.floor(i/2) : i
    const derivedIndex = i % nums.length;

    while (stack.length && stack[stack.length - 1] <= nums[derivedIndex]) {
      stack.pop();
    }

    if (stack.length) {
      res[derivedIndex] = stack[stack.length - 1];
    } else {
      res[derivedIndex] = -1;
    }

    stack.push(nums[derivedIndex]);
  }

  return res;
};
