/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMaxProd = maxProd;
    const tempMinProd = minProd;

    maxProd = Math.max(nums[i], tempMaxProd * nums[i], tempMinProd * nums[i]);
    minProd = Math.min(nums[i], tempMaxProd * nums[i], tempMinProd * nums[i]);
    answer = Math.max(answer, maxProd);
  }

  return answer;
};
