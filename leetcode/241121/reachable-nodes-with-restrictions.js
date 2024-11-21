/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const visited = new Set();
  const restrictedSet = new Set(restricted);

  const adj = {};

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  function dfs(node) {
    if (restrictedSet.has(node)) {
      return;
    }

    visited.add(node);

    // for each neighbor
    // only call dfs if not in visited
    for (const neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(0);

  return visited.size;
};
