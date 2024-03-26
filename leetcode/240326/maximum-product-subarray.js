var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const tempMax = Math.max(curr, max * curr, min * curr);
    min = Math.min(curr, max * curr, min * curr);
    max = tempMax;

    res = Math.max(max, res);
  }

  return res;
};
