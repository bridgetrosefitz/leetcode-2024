/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const adj = new Map();
  const restrictedSet = new Set(restricted);
  let count = 1;
  const visited = new Set();

  for (const [u, v] of edges) {
    if (adj.has(u)) {
      const neighbors = adj.get(u);
      neighbors.push(u);
    } else {
      adj.set(u, [v]);
    }

    if (adj.has(v)) {
      const neighbors = adj.get(v);
      neighbors.push(v);
    } else {
      adj.set(v, [u]);
    }
  }

  const q = [];
  q.push(0);

  // if it's a tree, there are no loops,so I don't need visited, right? Nah, coz we don't want to go back up

  while (q.length) {
    const curr = q.shift();

    for (const neighbor of adj.get(curr)) {
      if (restrictedSet.has(neighbor)) continue;
      if (visited.has(neighbor)) continue;
      q.push(neighbor);
      count++;
      visited.add(neighbor);
    }
  }

  return count;
};
