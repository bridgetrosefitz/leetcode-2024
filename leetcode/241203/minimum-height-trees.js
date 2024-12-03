/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  // any node could also be a root
  // adj list with neighbors
  /*
        {
            0: [1],
            1: [0,2,3],
            2: [1],
            3: [1]
        }

        build adj list
        visited set
        bfs
        increment level until all visited
        do this for every key and find min
    */

  /*
    
    adj = {
        1: [0, 2, 3],
        0: [1],
        2: [1],
        3: [1]
    }
    
    */

  const adj = {};
  /*
    {
        1: 1,

    }
    */

  for (const [a, b] of edges) {
    if (adj.hasOwnProperty(a)) {
      const aNeighbors = adj[a];
      aNeighbors.push(b);
    } else {
      adj[a] = [b];
    }
    if (adj.hasOwnProperty(b)) {
      const bNeighbors = adj[b];
      bNeighbors.push(a);
    } else {
      adj[b] = [a];
    }
  }

  /*
    
    adj = {
        1: [0, 2, 3],
        0: [1],
        2: [1],
        3: [1]
    }
    
    */
  let minSteps = Infinity;
  const rootHeights = {};

  for (const startingNode of Object.keys(adj)) {
    const q = [startingNode]; // [0,2,3]
    let visited = new Set(); // {1,0,2,3}
    visited.add(parseInt(startingNode));
    let steps = 0; // 0 // 1

    while (q.length) {
      const qLength = q.length; // 1 // 3
      const visitedLength = visited.size; // 1 // 4

      for (let i = 0; i < qLength; i++) {
        const curr = q.shift(); // 1 // 0

        const neighbors = adj[curr]; // [0,2,3] // [1]
        for (const neighbor of neighbors) {
          if (visited.has(neighbor)) {
            continue;
          }

          q.push(neighbor);
          visited.add(neighbor);
        }
      }

      if (visitedLength < visited.size) {
        steps++;
      }
    }
    minSteps = Math.min(minSteps, steps);
    rootHeights[startingNode] = steps;
  }

  const res = [];
  for (const node of Object.keys(rootHeights)) {
    if (rootHeights[node] === minSteps) {
      res.push(parseInt(node));
    }
  }

  return res;

  // BE CAREFUL - obj key type is always a string?!
};
