var twoSum = function (nums, target) {
  const numbersNeeded = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (numbersNeeded.has(curr)) {
      return [numbersNeeded.get(curr), i];
    } else {
      const complement = target - curr;
      numbersNeeded.set(complement, i);
    }
  }
};
