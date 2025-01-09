/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  let semesters = 0;
  const adj = {}; // keys are prereqs
  const inDegrees = {};

  for (let i = 1; i <= n; i++) {
    adj[i] = [];
    inDegrees[i] = 0;
  }

  for (const [prereq, node] of relations) {
    adj[prereq].push(node);
    inDegrees[node] = (inDegrees[node] || 0) + 1;
  }

  const visited = new Set();

  const q = [];

  for (const node of Object.keys(inDegrees)) {
    if (inDegrees[node] === 0) {
      q.push(parseInt(node));
    }
  }

  while (q.length > 0) {
    const numNodesAtCurrLevel = q.length;

    for (let i = 0; i < numNodesAtCurrLevel; i++) {
      const currClass = q.shift();
      visited.add(currClass);
      const neighbors = adj[currClass];

      neighbors.forEach(neighbor => {
        if (visited.has(neighbor)) {
          return;
        }
        inDegrees[neighbor]--;

        if (inDegrees[neighbor] === 0) {
          q.push(neighbor);
        }
      });
    }

    semesters++;
  }

  if (visited.size < n) return -1;
  return semesters;
};
