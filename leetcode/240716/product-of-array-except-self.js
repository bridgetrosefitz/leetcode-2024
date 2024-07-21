/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // create multiplicationPrefix
  // create multiplicationSuffix

  // for every i, multiply the mP of i - 1 by the mS of i + 1
  const ans = [];
  const multiplicationPrefix = new Array(nums.length);
  const multiplicationSuffix = new Array(nums.length);
  let currProductPrefix = 1;
  let currProductSuffix = 1;
  for (let i = 0; i < nums.length; i++) {
    const prefixNum = nums[i];
    const suffixNum = nums[nums.length - i - 1];

    currProductPrefix *= prefixNum;
    multiplicationPrefix[i] = currProductPrefix;
    currProductSuffix *= suffixNum;
    multiplicationSuffix[nums.length - i - 1] = currProductSuffix;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      ans.push(multiplicationSuffix[i + 1]);
    } else if (i === nums.length - 1) {
      ans.push(multiplicationPrefix[i - 1]);
    } else {
      ans.push(multiplicationPrefix[i - 1] * multiplicationSuffix[i + 1]);
    }
  }

  return ans;
};
