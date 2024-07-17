function knapsack(weights, maxWeight) {
  const memo = {};

  function backtrack(remainingWeight, i) {
    if (remainingWeight < 0) return -Infinity;
    if (i === weights.length) return 0;

    const key = `${remainingWeight}-${i}`;
    if (memo.hasOwnProperty(key)) return memo[key];

    const withItem =
      weights[i] + backtrack(remainingWeight - weights[i], i + 1);
    const withoutItem = backtrack(remainingWeight, i + 1);

    return (memo[key] = Math.max(withItem, withoutItem));
  }

  return backtrack(maxWeight, 0);
}
