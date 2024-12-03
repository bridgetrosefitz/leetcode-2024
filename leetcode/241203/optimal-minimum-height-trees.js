/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0];
  }

  const adj = {};

  for ([n1, n2] of edges) {
    if (adj[n1]) {
      adj[n1].push(n2);
    } else {
      adj[n1] = [n2];
    }

    if (adj[n2]) {
      adj[n2].push(n1);
    } else {
      adj[n2] = [n1];
    }
  }

  const edgeCount = {};
  const leaves = [];

  for ([srcStr, neighbors] of Object.entries(adj)) {
    const src = parseInt(srcStr);

    if (neighbors.length === 1) {
      leaves.push(src);
    }

    edgeCount[src] = neighbors.length;
  }

  while (leaves.length) {
    if (n <= 2) {
      return leaves;
    }

    const leavesLength = leaves.length;

    for (let i = 0; i < leavesLength; i++) {
      const node = leaves.shift();
      n -= 1;
      for (const neighbor of adj[node]) {
        edgeCount[neighbor] -= 1;
        if (edgeCount[neighbor] === 1) {
          leaves.push(neighbor);
        }
      }
    }
  }
};
