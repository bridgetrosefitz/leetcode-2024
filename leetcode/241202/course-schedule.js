/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // adj list

  // store 0-1-2 visited arr

  // if node is 1 in visited, return false

  // [[1,0]]
  const adj = {};

  /*
        {
            1: [0],
            0: []
        }

        visited = [2,1]
    */

  for (const [course, prereq] of prerequisites) {
    if (!adj[course]) {
      adj[course] = [prereq];
    } else {
      adj[course].push(prereq);
    }

    if (!adj[prereq]) {
      adj[prereq] = [];
    }
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
