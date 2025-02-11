/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  let semesters = 0;
  const adj = {};
  const inDegrees = {};

  for (let i = 1; i <= n; i++) {
    adj[i] = [];
    inDegrees[i] = 0;
  }

  for (const [prereq, node] of relations) {
    adj[prereq].push(node);
    inDegrees[node]++;
  }

  const q = [];

  for (const [node, numInDegrees] of Object.entries(inDegrees)) {
    if (numInDegrees === 0) {
      q.push(parseInt(node));
    }
  }

  while (q.length > 0) {
    const numNodesAtCurrLevel = q.length;

    for (let i = 0; i < numNodesAtCurrLevel; i++) {
      const curr = q.shift();
      const neighbors = adj[curr];

      neighbors.forEach(neighbor => {
        inDegrees[neighbor]--;

        if (inDegrees[neighbor] === 0) {
          q.push(neighbor);
        }
      });
    }

    semesters++;
  }

  for (const [node, numInDegrees] of Object.entries(inDegrees)) {
    if (numInDegrees > 0) {
      return -1;
    }
  }

  return semesters;
};
