function canFinish(numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;

  const adj = new Map();

  for (const [currClass, requiredClass] of prerequisites) {
    if (adj.has(currClass)) {
      const requirements = adj.get(currClass);
      requirements.push(requiredClass);
    } else {
      adj.set(currClass, [requiredClass]);
    }

    if (!adj.has(requiredClass)) {
      adj.set(requiredClass, []);
    }
  }

  const visited = new Array(numCourses).fill(0);

  function dfs(currClass) {
    visited[currClass] = 1;

    for (const neighbor of adj.get(currClass)) {
      if (visited[neighbor] === 2) continue;
      if (visited[neighbor] === 1) return false;
      if (!dfs(neighbor)) return false;
    }

    visited[currClass] = 2;

    return true;
  }

  for (currClass of adj.keys()) {
    if (!dfs(currClass)) return false;
  }

  return true;
}
