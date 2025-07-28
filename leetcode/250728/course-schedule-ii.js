/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const res = [];
  const adj = {};
  const inDegrees = {};
  // const visited = new Set()
  // build adj list

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
    inDegrees[i] = 0;
  }

  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    inDegrees[course]++;
  }

  // build list of inDegrees

  // populate 0 indegree nodes in queue

  const q = [];
  for (const [course, degrees] of Object.entries(inDegrees)) {
    if (degrees === 0) {
      q.push(course);
      res.push(course);
    }
  }

  // bfs from 0 indegree nodes

  while (q.length) {
    const curr = q.shift();
    const neighbors = adj[curr];

    for (const neighbor of neighbors) {
      inDegrees[neighbor]--;
      if (inDegrees[neighbor] === 0) {
        res.push(neighbor);
        q.push(neighbor);
      }
    }
    // decrement indegrees
    // push into res and q if indegrees is 0
  }
  if (res.length !== numCourses) {
    return [];
  }

  return res.map(Number);
};
