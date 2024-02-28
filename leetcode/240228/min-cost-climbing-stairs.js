/**
 * @param {number[]} cost
 * @return {number}
 */

// bottom-up
var minCostClimbingStairs = function (cost) {
  const dp = new Array(cost.length + 1).fill(0);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }

  return dp[dp.length - 1];
};

// top-down

var minCostClimbingStairs2 = function (cost) {
  const memo = new Map();

  const minimumCost = function (i) {
    if (i <= 1) return 0;
    if (!memo.has(i)) {
      memo.set(
        i,
        Math.min(
          minimumCost(i - 1) + cost[i - 1],
          minimumCost(i - 2) + cost[i - 2]
        )
      );
    }

    return memo.get(i);
  };

  return minimumCost(cost.length);
};
