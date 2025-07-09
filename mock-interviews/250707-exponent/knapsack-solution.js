function knapsack(weights, values, cap) {
  // your code goes here
}

function knapsackCache(weights, values, cap, index, cache) {
  if (cap <= 0 || index >= weights.length) {
    return 0;
  }

  let cacheKey = `${index}:${cap}`;
  if (cache.hasOwnProperty(cacheKey)) {
    return cache[cacheKey];
  }

  let result;
  if (weights[index] > cap) {
    // We can't include this item
    result = knapsackCache(weights, values, cap, index + 1, cache);
  } else {
    // Try both including and excluding the current item
    const include = values[index] + knapsack;
  }
}

// debug your code below
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
console.log(knapsack(weights, values, capacity));
