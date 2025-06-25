/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const res = [];
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

  const q = [];
  for (const [node, count] of Object.entries(inDegrees)) {
    if (count === 0) {
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

  return res.length === numCourses ? res.reverse() : [];
};
