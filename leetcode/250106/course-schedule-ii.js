/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adj = {};
  const inDegreesCounter = {};

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
    inDegreesCounter[i] = 0;
  }

  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    inDegreesCounter[course]++;
  }

  const q = [];
  const res = [];

  for (const [course, inDegrees] of Object.entries(inDegreesCounter)) {
    if (inDegrees === 0) {
      const qItem = parseInt(course);
      q.push(qItem);
    }
  }

  while (q.length) {
    const curr = q.shift();
    res.push(curr);

    const neighbors = adj[curr];

    for (const neighbor of neighbors) {
      inDegreesCounter[neighbor]--;
      if (inDegreesCounter[neighbor] === 0) {
        q.push(neighbor);
      }
    }
  }

  for (const inDegreesCount of Object.values(inDegreesCounter)) {
    if (inDegreesCount > 0) {
      return [];
    }
  }

  return res;
};
