/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  // tree = 1) no cycles, 2) XXX

  /*
    
        0 - 1 - 2 
        >> true

        adj = {
            0: [1],
            1: [0,2],
            2: [1], 
        }

            1
          /   \
         2  --  3 
         >> false

            1
          /   \
         2  --  3 -- 4
    */

  const adj = {};

  for (let i = 0; i < n; i++) {
    adj[i] = new Set();
  }

  //     adj = {
  //     0: [1],
  //     1: [0,2],
  //     2: [1],
  // }

  for (const edge of edges) {
    const [node1, node2] = edge; // [0,1] // [1,0] // [1,2] // [2,1]

    const node1Neighbors = adj[node1]; // 0: [1] // 1: [0] // 1: [0,2] // 2: [1]
    const node2Neighbors = adj[node2]; // 1: [0] // 0: [1] // 2: [1] // 1: [0,2]

    node1Neighbors.add(node2);
    node2Neighbors.add(node1);
  }

  const visited = new Set(); // [0]

  function dfs(node, prev) {
    // 0,0 // 1,0
    const nodeNeighbors = adj[node]; // [1]
    visited.add(node);

    for (const neighbor of nodeNeighbors) {
      if (prev !== neighbor && visited.has(neighbor)) {
        return false;
      }

      if (!dfs(neighbor, node)) return false;
    }

    return true;
  }

  return dfs(0, -1);
};
