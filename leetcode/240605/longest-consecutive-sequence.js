/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let max = -Infinity;
  const visited = new Set();

  // make an adj list that stores numbers you've seen that are one above and below each key

  // max
  // dfs(node, counter)
  //add to visited

  // for each neighbor of node
  // if neighbor is not in visited
  // propagatedCounter = dfs with counter + 1

  // return propagatedCounter

  // for each key in adj list
  // run dfs on that node, counter = 1
  // update max

  const adj = new Map();

  for (const num of nums) {
    if (!adj.has(num)) {
      adj.set(num, []);

      const increment = num + 1;
      const decrement = num - 1;

      if (adj.has(increment)) {
        const numNeighbors = adj.get(num);
        const incrementNeighbors = adj.get(increment);
        numNeighbors.push(increment);
        incrementNeighbors.push(num);
      }

      if (adj.has(decrement)) {
        const numNeighbors = adj.get(num);
        const decrementNeighbors = adj.get(decrement);
        numNeighbors.push(decrement);
        decrementNeighbors.push(num);
      }
    }
  }

  function dfs(curr, counter) {
    let propagatedCounter = counter;
    visited.add(curr);

    for (const neighbor of adj.get(curr)) {
      if (!visited.has(neighbor)) {
        propagatedCounter = dfs(neighbor, propagatedCounter + 1);
      }
    }

    return propagatedCounter;
  }

  for (const num of adj.keys()) {
    const streak = dfs(num, 1);
    max = Math.max(max, streak);
  }

  return max;
};
