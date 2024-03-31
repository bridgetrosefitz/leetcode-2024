// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// coins = [1,5,6,9], amount = 11 can this be solved greedily?

// coins = [2,1,5], amount = 100

// 2 -> value = 2, coins = 1
// 2,2 -> value =4, coins = 2
// dp = {1:1, 2: 1, 4: 2}

// 1 -> 1 -> 1 -> 1 (4)
// |     \-> 2 (4)
//  \-> 2 -> 1 (4)
// 2 -> 1 -> 1
//  \-> 2

// answer = 50 coins

// 1 -> value = 1, coins = 1
// 1,1 -> value = 2, coins = 2 stop (stop early)

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins: number[], amount: number) {
  // top-down approach is preffered in any interviews
  // recursion (dfs) + cache

  const cache: { [key: string]: number } = {}; // key: val -> remainder: number coins
  let c = 0;
  // state variable = remainder
  function dfs(rem: number) {
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
