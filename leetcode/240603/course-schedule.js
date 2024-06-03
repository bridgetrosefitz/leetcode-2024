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

  function dfs(currClass, originalClass) {
    if (currClass === originalClass) return false;

    for (const neighbor of adj.get(currClass)) {
      if (!dfs(neighbor, originalClass)) return false;
    }

    return true;
  }

  let result = true;
  for (currClass of adj.keys()) {
    const firstPrerequisite = adj.get(currClass)[0];
    result = dfs(firstPrerequisite, currClass);
  }

  return result;
}
