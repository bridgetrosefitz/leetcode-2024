/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const res = [];
  // build adj list
  const adj = {};

  const inDegrees = {};

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
    inDegrees[i] = 0;
  }

  for (const [course, prereq] of prerequisites) {
    adj[course].push(prereq);
    inDegrees[prereq]++;
  }

  // build indegreesCounter map

  // queue up nodes with no indegrees

  const q = [];
  for (const [node, countInDegrees] of Object.entries(inDegrees)) {
    if (countInDegrees === 0) {
      q.push(node);
      res.push(Number(node));
    }
  }

  while (q.length) {
    const curr = q.shift();

    for (const neighbor of adj[curr]) {
      inDegrees[neighbor] -= 1;
      if (inDegrees[neighbor] === 0) {
        q.push(neighbor);
        res.push(Number(neighbor));
      }
    }
  }

  // process nodes in queue
  // reduce indegrees count for every outbound neighbor of curr node
  // if count of any of those nodes is now 0, queue it up

  return res.length === numCourses ? res.reverse() : [];
};
