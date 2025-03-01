/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  const adj = {};

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (const [u, v] of edges) {
    // if(!adj.hasOwnPropert(u)) {
    //     adj[u] = [v]
    // } else {
    //     adj[u].push(v)
    // }

    // if(!adj.hasOwnProperty(v)) {
    //     adj[v] = [u]
    // } else {
    //     adj[v].push(u)
    // }
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = new Set();

  function dfs(node, prev) {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const neighbor of adj[node]) {
      if (neighbor === prev) {
        continue;
      }
      if (!dfs(neighbor, node)) {
        return false;
      }
    }

    return true;
  }

  return dfs(0, -1) && visited.size === n;
};
