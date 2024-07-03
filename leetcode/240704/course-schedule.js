var canFinish = function (numCourses, prerequisites) {
  const adj = new Map();

  for (let i = 0; i < numCourses; i++) {
    adj.set(i, []);
  }

  for (const [classToTake, prerequisite] of prerequisites) {
    const prereqs = adj.get(classToTake);
    prereqs.push(prerequisite);
  }

  const visited = new Array(numCourses).fill(0);

  function dfs(classToTake) {
    visited[classToTake] = 1;

    for (const neighbor of adj.get(classToTake)) {
      if (visited[neighbor] === 2) continue;
      if (visited[neighbor] === 1) return false;
      if (!dfs(neighbor)) return false;
    }

    visited[classToTake] = 2;
    return true;
  }

  for (const classToTake of adj.keys()) {
    if (!dfs(classToTake)) return false;
  }

  return true;
};
