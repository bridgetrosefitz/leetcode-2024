function climbStairs(n) {
  const memo = new Map();

  function dp(stepNumber) {
    if (stepNumber <= 2) {
      return stepNumber;
    }

    if (!memo.has(stepNumber)) {
      memo.set(stepNumber, dp(stepNumber - 1) + dp(stepNumber - 2));
    }

    return memo.get(stepNumber);
  }

  function climb(n) {
    return dp(n);
  }

  return climb(n);
}
