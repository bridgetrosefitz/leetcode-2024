var cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  const lookup = new Map();

  function dfs(curr) {
    const copy = new Node(curr.val);
    lookup.set(curr, copy);

    for (const neighbor of curr.neighbors) {
      const copyNeighbor = lookup.get(neighbor) || dfs(neighbor);

      copy.neighbors.push(copyNeighbor);
    }

    return copy;
  }

  dfs(node);

  return lookup.get(node);
};
