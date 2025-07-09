/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /*
  
  INPUTS type length hostile
  - int (numCourses): course 'names' from 0 to n - 1
  - [int, int][]: prerequisites, where [COURSE, PREREQUISITE]
  - empty prerequisites [] or one only >> true
  - non connected graph
      
      // has cycle   
      2 > 1 > 4
          ^. <
          3

      [[1,2],[1,4],[3,4],[1,3],[2,3]]
      
      // NO CYCLE
      2 > 1 > 4
          ^. 
          3
      [[1,2],[1,4],[1,3],[2,3]]
              
  
  OUTPUTS type length hostile
  - boolean, true if can finish all (n) courses

  APPROACH

  {
      1: [4]
      2: [1]
      4: [3]
      3: [2,1]
  }

  visited = {}
  // make a copy of the set for each new node we visit (so when we return, we don'have the set before we visited)
  // if we visit twice, return false and bubble up
  // return true

  */

  const adj = {};
  const visited = new Array(numCourses);

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
  }

  for (const [course, prereq] of prerequisites) {
    const neighbors = adj[prereq];
    neighbors.push(course);
  }

  /*
  
  [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]

  {
      0: [],
      1: [13],
      2: [],
      3: [],
      4: [],
      5: [5],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [0],
      11: [6],
      12: [],
      13: [],
      14: [11],
      15: [1],
      16: [],
      17: [4],
      18: [3],
      19: []
      20: []
  }
  */

  function dfs(node) {
    if (visited[node] === 1) {
      return false;
    }

    if (visited[node] === 2) {
      return true;
    }

    visited[node] = 1;

    for (const neighbor of adj[node]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    visited[node] = 2;
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
