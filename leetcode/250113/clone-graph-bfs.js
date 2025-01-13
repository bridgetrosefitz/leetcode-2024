var cloneGraph = function (node) {
  /*
    
    1 - 2
    |
    3 - 4

    q = [2,3]
    visited = {1}
    lookup = {
        1: 1

    }
    // bfs
    // visited
    // reference object
    // as we visit each node, 
        // add preexisting copy from reference object, 
        // or create copy and set
    // loop over items in reference object and imitate original's neighbors for copy
    */

  if (!node) {
    return null;
  }

  const q = [node];
  const copyLookup = new Map();

  while (q.length) {
    const curr = q.shift();

    // work
    const copy = new Node(curr.val);
    copyLookup.set(curr, copy);

    for (const neighbor of curr.neighbors) {
      if (copyLookup.has(neighbor)) {
        continue;
      }

      q.push(neighbor);
    }
  }

  for (const [original, copy] of copyLookup.entries()) {
    for (const neighbor of original.neighbors) {
      const neighborCopy = copyLookup.get(neighbor);
      copy.neighbors.push(neighborCopy);
    }
  }

  return copyLookup.get(node);
};
