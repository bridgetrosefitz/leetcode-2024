/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  /*
        Inputs
        - n
        - edge list

        Output
        - int (number of pairs, unreachable from each other )

        1 > 2,3
        2 > 3
        3 

        4 x 3 x 2
    */

  const adj = {};

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (const [node, neighbor] of edges) {
    adj[node].push(neighbor);
    adj[neighbor].push(node);
  }

  const visited = new Set();

  let disconnectedNodesCount = 0;
  let disconnectedPairsCount = 0;

  /*
    
    {
  '0': [ 2, 5 ],
  '2': [ 0, 4 ],
  '1': [ 6 ],
  '3': [],
  '4': [ 2, 5 ],
  '5': [ 0, 4 ],
  '6': [ 1 ]
    }
    */
  function dfs(node) {
    let nodesSoFar = 0;

    if (visited.has(node)) {
      return 0;
    }

    visited.add(node);

    for (const neighbor of adj[node]) {
      nodesSoFar += dfs(neighbor);
    }

    return nodesSoFar + 1;
  }

  for (const node of Object.keys(adj)) {
    const intNode = parseInt(node);
    let nodesInComponent = dfs(intNode);

    disconnectedPairsCount += nodesInComponent * disconnectedNodesCount;
    disconnectedNodesCount += nodesInComponent;
  }

  return disconnectedPairsCount;
};
