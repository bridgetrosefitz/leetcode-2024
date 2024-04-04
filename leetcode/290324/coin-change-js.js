var coinChange = function (coins, amount) {
  // top-down approach is preffered in any interviews
  // recursion (dfs) + cache

  const cache = {}; // key: val -> remainder: number coins
  let c = 0;
  // state variable = remainder
  function dfs(rem) {
    c += 1;
    // base cases
    if (rem === 0) {
      return 0;
    }

    if (rem < 0) {
      return Infinity;
    }

    if (rem in cache) {
      return cache[rem];
    }

    let minNumberOfCoins = Infinity;
    for (const coin of coins) {
      const numberOfcoins = dfs(rem - coin) + 1;
      // we care about the less number of coins at this point
      minNumberOfCoins = Math.min(minNumberOfCoins, numberOfcoins);
    }
    cache[rem] = minNumberOfCoins;
    console.log({ cache });
    return minNumberOfCoins;
  }

  const result = dfs(amount);
  console.log(c);
  return result === Infinity ? -1 : result;
};

// MALTESER

console.log(coinChange([1, 5, 6, 9], 11));
