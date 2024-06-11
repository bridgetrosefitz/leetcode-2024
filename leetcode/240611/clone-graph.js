/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const map = new Map();
  const q = [node];
  const visited = new Set();

  while (q.length) {
    const curr = q.shift();

    map.set(curr, new Node(curr.val));
    visited.add(curr);

    for (const neighbor of curr.neighbors) {
      if (!visited.has(neighbor)) q.push(neighbor);
    }
  }

  for (const originalNode of map.keys()) {
    const newNodeNeighbors = map.get(originalNode).neighbors;

    originalNode.neighbors.forEach(originalNeighbor => {
      newNodeNeighbors.push(map.get(originalNeighbor));
    });
  }

  return map.get(node);
};
