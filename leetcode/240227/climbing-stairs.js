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
