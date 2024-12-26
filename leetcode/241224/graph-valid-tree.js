/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  // [[0,1],[1,2],[2,3],[1,3],[1,4]]

  // no cycles
  // no unconnected nodes / only one connected component

  const adj = {};

  /**

    adj = {
        0: [1]
        1: [0,2,3,4]
        2: [1, 3]
        3: [2,1]
        4: [1]

    }
    
     */

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visited = new Set();
  // visited = {0}

  function dfs(node, prev) {
    // dfs(0, -1)
    // dfs(1, 0)
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const neighbor of adj[node]) {
      if (neighbor === prev) {
        continue;
      }

      if (!dfs(neighbor, node)) return false;
    }

    return true;
  }

  if (!dfs(0, -1)) {
    return false;
  }

  if (visited.size !== n) {
    return false;
  }

  return true;
};
