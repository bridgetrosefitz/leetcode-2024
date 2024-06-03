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

  map.set(node, new Node(node.val));

  while (q.length) {
    const curr = q.shift();
    const copy = new Node(curr.val);
    map.set(curr, copy);

    curr.neighbors.forEach(neighbor => {
      if (!map.has(neighbor)) q.push(neighbor);
    });
  }

  for (const [key, copyNode] of map) {
    key.neighbors.forEach(neighbor => {
      copyNode.neighbors.push(map.get(neighbor));
    });
  }

  return map.get(node);
};
