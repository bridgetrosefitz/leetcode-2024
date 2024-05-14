function cloneGraph(node) {
  // traverse every node using bfs
  // add each neighbor to a map, creating a copy of that neighbor as value

  if (!node) return null;

  const map = new Map();

  const q = [node];

  while (q.length) {
    const node = q.shift();
    map.set(node, new Node(node.val));

    for (const neighbor of node.neighbors) {
      if (!map.has(neighbor)) {
        q.push(neighbor);
      }
    }
  }
  // for each node in map, go through neighbors and add each one to the copy value

  for (const [key, val] of map) {
    key.neighbors.forEach(neighbor => {
      val.neighbors.push(map.get(neighbor));
    });
  }

  return map.get(node);
}
