/// BFS

var canReach = function (arr, start) {
  const q = [start];
  const visited = new Set();

  while (q.length) {
    const curr = q.shift();

    if (arr[curr] === 0) return true;

    const upper = curr + arr[curr];
    const lower = curr - arr[curr];

    if (upper < arr.length && !visited.has(upper)) {
      q.push(upper);
      visited.add(upper);
    }
    if (lower >= 0 && !visited.has(lower)) {
      q.push(lower);
      visited.add(lower);
    }
  }

  return false;
};

/// DFS

var canReach = function (arr, start) {
  function dfs(curr, visited = new Set()) {
    if (curr >= arr.length) return;
    if (curr < 0) return;
    if (visited.has(curr)) return;

    if (arr[curr] === 0) return true;
    visited.add(curr);

    const upper = curr + arr[curr];
    const lower = curr - arr[curr];
    if (dfs(upper, visited)) return true;
    if (dfs(lower, visited)) return true;

    return false;
  }

  return dfs(start);
};
