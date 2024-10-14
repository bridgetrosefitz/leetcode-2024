function nextGreaterElement(nums) {
  const stack = [];
  const res = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop(); // only keep values that are local maximums, i.e. smaller than curr el
    }

    // the next value that is larger than this
    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i]); // add current val to stack
  }
}
