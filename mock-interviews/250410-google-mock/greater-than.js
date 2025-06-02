function isValid(nums) {
  // build adj list

  /*
  
    [
    ["a", "b"],
    ["a", "d"],
    ["b", "d"],
  ],

  {
    a: [b,d]
    b: [d]
    d: []

  }

  a > b > d >> TRUE

            A
          /  \
         B ->  D

  */
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

  /*
    {
  a: [b,d],
  b: [d],
  d: []
  }
  
  */

  const visited = new Set(); // {}

  function dfs(node) {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const neighbor of adj[node]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    // when we come back from running dfs on all a node's neighbors,
    // remove it from visited (because you or your neighbors can no longer possibly point back to another previously visited node)
    visited.delete(node);

    // in my brain I struggled to see for a sec that this WASNT a cycle

    // CYCLE = follow arrows and you end up back where you were
    // THEREFORE, to know that you're not back where you were (aka no cycles in a particular path), you run out of arrows / your DFS ends, aka when you've finished visitng all your neighbors
    // visited set is like a path- keeping track of all the steps you've been along on that path

    return true;
  }

  ///////////////////

  for (const node of Object.keys(adj)) {
    // clear visited
    visited.clear();
    if (!dfs(node)) {
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
