function isValid(nums) {
  const adj = {};

  for (const [node, neighbor] of nums) {
    if (!adj[node]) {
      adj[node] = [neighbor];
    } else {
      adj[node].push(neighbor);
    }

    if (!adj[neighbor]) {
      adj[neighbor] = [];
    }
  }

  function dfs(node, visited) {
    for (const neighbor of adj[node]) {
      if (visited.has(neighbor)) {
        return false;
      }

      visited.add(neighbor);

      if (!dfs(neighbor, new Set([...visited]))) {
        return false;
      }
    }

    return true;
  }

  for (const node of Object.keys(adj)) {
    if (!dfs(node, new Set())) {
      return false;
    }
  }

  return true;
}

const tests = [
  [
    ["a", "b"],
    ["a", "d"],
    ["b", "d"],
  ],
  [
    ["a", "b"],
    ["b", "c"],
  ],
  [
    ["a", "b"],
    ["b", "c"],
    ["c", "a"],
  ],
];
const expected = [true, true, false];

for (let i = 0; i < tests.length; i++) {
  const ans = isValid(tests[i]);
  if (ans !== expected[i]) {
    console.log("FAIL", "test", tests[i], "expected", expected[i]);
  } else {
    console.log("PASS");
  }
}
