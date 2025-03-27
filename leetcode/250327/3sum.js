/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      findComplements(i);
    }
  }

  function findComplements(i) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[low] + nums[high] + nums[i];

      if (sum < 0) {
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        res.push([nums[i], nums[low], nums[high]]);
        high--;
        low++;
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
      }
    }
  }

  return res;
};
