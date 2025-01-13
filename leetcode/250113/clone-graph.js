var cloneGraph = function (node) {
  // [[2,4],[1,3],[2,4]]
  if (!node) {
    return null;
  }

  /*
    
        1   -   2
        |       |
        3       4 
    
    */

  // traverse twice
  // first time, store reference to each node and make copy
  // second time, create connections

  const visited = new Set(); // {1, 2, 4, 3}
  const copyReferences = new Map();

  /*
    
    copyReferences = {
        1: 1,
        2: 2,
        4: 4,
        3: 3

    }
    */

  function createCopies(curr) {
    // add to visited
    // make copy and add to copyReferences

    const copy = new Node(curr.val);
    copyReferences.set(curr, copy);
    visited.add(curr);

    for (const neighbor of curr.neighbors) {
      if (visited.has(neighbor)) {
        continue;
      }

      createCopies(neighbor);
    }
  }

  createCopies(node);

  for (const [original, copy] of copyReferences.entries()) {
    // for each neighbor of original, push copyNeighbor into copy's neighbors

    for (const neighbor of original.neighbors) {
      const copyNeighbor = copyReferences.get(neighbor);
      copy.neighbors.push(copyNeighbor);
    }
  }

  return copyReferences.get(node);
};
