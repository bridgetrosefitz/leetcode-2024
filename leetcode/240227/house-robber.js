// top-down

const maximumProfitFromHouseRobbery = function (nums) {
  const memo = new Map();

  const dp = function (i) {
    if (i === 0) return nums[0];
    if (i === 1) return Math.max(nums[0], nums[1]);
    if (!memo.has(i)) {
      memo.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]));
    }

    return memo.get(i);
  };

  return dp(nums.length - 1);
};

// bottom-up

const maximumProfitFromHouseRobbery2 = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
