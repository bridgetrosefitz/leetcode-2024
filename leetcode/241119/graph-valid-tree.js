/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (!n) return true;

  const adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = new Set();
  }

  for (const [n1, n2] of edges) {
    adj[n1].add(n2);
    adj[n2].add(n1);
  }

  const visited = new Set();

  function dfs(i, prev) {
    if (visited.has(i)) {
      return false;
    }

    visited.add(i);

    for (const j of adj[i]) {
      if (j === prev) {
        continue;
      }

      if (!dfs(j, i)) {
        return false;
      }
    }

    return true;
  }

  return dfs(0, -1) && n === visited.size;
};
