function knapsackCache(weights, values, cap, index, cache) {
  if (cap <= 0 || index >= weights.length) {
    return 0;
  }

  // Use index and remaining capacity for cache key to avoid costly array operations
  let cacheKey = `${index}:${cap}`;
  if (cache.hasOwnProperty(cacheKey)) {
    return cache[cacheKey];
  }

  let result;
  if (weights[index] > cap) {
    // Cannot include the item at index
    result = knapsackCache(weights, values, cap, index + 1, cache);
  } else {
    // Try both including and excluding the current item
    let include =
      values[index] +
      knapsackCache(weights, values, cap - weights[index], index + 1, cache);
    let exclude = knapsackCache(weights, values, cap, index + 1, cache);
    result = Math.max(include, exclude);
  }

  // Cache the result
  cache[cacheKey] = result;
  return result;
}

function knapsack(weights, values, cap) {
  let cache = {};
  return knapsackCache(weights, values, cap, 0, cache);
}
