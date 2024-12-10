/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  /*

    1 - 2
    | /
    3

    {
        1: [2,3],
        2: [1,3],
        3: [1,2]
    }
    
    2 - 1 - 5
    |.    /
    3 - 4
    
    {
        1: [2,5]
        2: [1,3]
        3: [2,4]
        4: [3,5]
        5: [1,4]
    }

    // when I find a loop, return the node I'm visiting 
    // when I find my loop, and the neighbor I came from
    // it will be the last one in the set because we are building the adj list from left to right over edges

    // could I use BFS here? why or why not?
    */

  const adj = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (adj.hasOwnProperty(a)) {
      adj[a].push(b);
    } else {
      adj[a] = [b];
    }

    if (adj.hasOwnProperty(b)) {
      adj[b].push(a);
    } else {
      adj[b] = [a];
    }
  }

  const visited = new Set(); // {1, 2, 3}

  function findLoop(node, prevNode) {
    /*
        
        {
            1: [2,3], *
            2: [1,3], *
            3: [1,2] *
        }
        */

    visited.add(node);

    for (const neighbor of adj[node]) {
      if (neighbor === prevNode) {
        continue;
      }

      if (visited.has(neighbor)) {
        return [node, neighbor];
      }

      findLoop(neighbor, node);
    }
  }

  return findLoop(1, -1);
};
