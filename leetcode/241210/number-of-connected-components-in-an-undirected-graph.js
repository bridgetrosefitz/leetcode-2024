/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  // build adjacency list
  // dfs on every node
  // add to visited
  // when we can no longer traverse, increment counter

  /*
        {
            0: [1],
            1: [0,2],
            2: [1],
            3: [4],
            4: [1]
        }

        visited = {0, 1, 2, 3}
        counter = 2

        OR

        iterate over edges,
        if one of the two numbers is in seen set, do not increment counter; else, increment
        add both to set
*/

  const adj = {};
  let counter = 0;
  const visited = new Set();

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (const edge of edges) {
    const [a, b] = edge;
    adj[a].push(b);
    adj[b].push(a);
  }

  function dfs(node) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (const neighbor of adj[node]) {
      dfs(neighbor);
    }

    return true;
  }

  for (let i = 0; i < n; i++) {
    if (dfs(i)) counter++;
  }

  return counter;
};
