/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const prefix = [];
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    prefix[i] = currSum;
  }

  const remaindersSeen = {};
  let ans = 0;

  for (let i = 0; i < prefix.length; i++) {
    const curr = prefix[i];
    if (curr === k) {
      ans++;
    }

    const remainder = curr - k;
    ans += remaindersSeen[remainder] ? remaindersSeen[remainder] : 0; // WHAT IS THIS LINE AND BELOW
    if (!remaindersSeen[curr]) {
      remaindersSeen[curr] = 0;
      remaindersSeen[curr]++;
    }
  }

  return ans;
};
