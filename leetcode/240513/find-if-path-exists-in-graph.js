/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // create adjacency list from edge list

  const adj = new Map();
  for (let i = 0; i < edges.length; i++) {
    const first = edges[i][0];
    const second = edges[i][1];

    if (!adj.has(first)) {
      adj.set(first, [second]);
    } else {
      const neighbors = adj.get(first);
      neighbors.push(second);
    }

    if (!adj.has(second)) {
      adj.set(second, [first]);
    } else {
      const neighbors = adj.get(second);
      neighbors.push(first);
    }
  }

  //** try having visited defined outside this function */
  // ** could we have used an array instead of map given that we know the nodes are 0 - n - 1
  // what type do you return from a recursive function if in some cases you're returning void
  // [[],[],[],[]]

  // visited = [0, 1]
  // node = 0

  function dfs(node, visited = new Set()) {
    // loop through adjacency list on that node
    if (visited.has(node)) return;

    visited.add(node);
    if (node === destination) return true;

    for (const neighbor of adj.get(node)) {
      if (dfs(neighbor, visited)) return true; // a return false disappears here
    }

    return false;
  }

  return dfs(source);
};
