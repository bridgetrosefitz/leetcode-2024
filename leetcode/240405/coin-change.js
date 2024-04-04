var coinChange = function (coins, amount) {
  const cache = {};

  function dfs(remainder) {
    if (remainder === 0) return 0;
    if (remainder < 0) return Infinity;

    if (remainder in cache) return cache[remainder];

    let minNumberOfCoins = Infinity;

    for (const coin of coins) {
      const numberOfCoins = dfs(remainder - coin) + 1;
      minNumberOfCoins = Math.min(minNumberOfCoins, numberOfCoins);
    }
    cache[remainder] = minNumberOfCoins;
    console.log(cache);
    return minNumberOfCoins;
  }

  const result = dfs(amount);
  return result === Infinity ? -1 : result;
};

// console.log(coinChange([1, 5, 6, 9], 11));
