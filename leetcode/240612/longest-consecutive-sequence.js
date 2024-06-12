/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  const map = new Map();
  const visited = new Set();

  for (const int of nums) {
    map.set(int, new Set());
  }

  for (const int of nums) {
    const increment = int + 1;
    const decrement = int - 1;

    const intNeighbors = map.get(int);

    if (map.has(increment)) {
      const incrementNeighbors = map.get(increment);
      intNeighbors.add(increment);
      incrementNeighbors.add(int);
    }

    if (map.has(decrement)) {
      const decrementNeighbors = map.get(decrement);
      intNeighbors.add(decrement);
      decrementNeighbors.add(int);
    }
  }

  function getStreak(node, visited) {
    let counter = 0;
    const q = [];

    q.push(node);

    while (q.length) {
      const curr = q.shift();

      counter++;
      visited.add(curr);

      for (const neighbor of map.get(curr)) {
        if (!visited.has(neighbor)) {
          q.push(neighbor);
        }
      }
    }

    return counter;
  }

  for (const int of map.keys()) {
    let streak = 0;
    if (!visited.has(int)) {
      streak = getStreak(int, visited);
    }

    max = Math.max(max, streak);
  }

  return max;
};
