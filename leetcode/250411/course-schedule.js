/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adj = {};

  // for(const [course, prereq] of prerequisites) {
  //     if(!adj[course]) {
  //         adj[course] = [prereq]
  //     } else {
  //         adj[course].push(prereq)
  //     }

  //     if(!adj[prereq]) {
  //         adj[prereq] = []
  //     }
  // }

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
  }

  for (const [course, prereq] of prerequisites) {
    adj[course].push(prereq);
  }

  const visited = new Array(numCourses).fill(0);

  function dfs(course) {
    if (visited[course] === 1) {
      return false;
    }

    if (visited[course] === 2) {
      return true;
    }

    visited[course] = 1;

    for (const neighbor of adj[course]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    visited[course] = 2;
    return true;
  }

  for (const course of Object.keys(adj)) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
