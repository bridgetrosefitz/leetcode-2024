// top down

const numberOfWaysToClimbStairs = function (n) {
  const dp = function (i) {
    const memo = new Map();
    if (i <= 2) return i;

    if (!memo.has(i)) {
      memo.set(i, dp(i - 1) + dp(i - 2));
    }
    return memo.get(i);
  };

  return dp(n);
};

// bottom up

const numberOfWaysToClimbStairs2 = function (n) {
  if (n === 1) return 1;

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
