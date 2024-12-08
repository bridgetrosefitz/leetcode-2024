/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  // BRUTE FORCE

  // backtrack, generating options at every node
  // push into path if we can reach n - 1th node
  // return if canVisit is 3
  // [[1,2],[3],[3],[]]

  const res = [];
  const temp = [];

  function helper(node) {
    if (node === graph.length - 1) {
      res.push([...temp, node]);
      return;
    }

    temp.push(node);

    for (const neighbor of graph[node]) {
      helper(neighbor);
    }

    temp.pop();
  }

  helper(0);

  return res;
};
