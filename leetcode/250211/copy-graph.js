/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  const lookup = new Map();

  function createCopies(curr) {
    const copy = new Node(curr.val);
    lookup.set(curr, copy);

    for (const neighbor of curr.neighbors) {
      if (lookup.has(neighbor)) {
        continue;
      }

      createCopies(neighbor);
    }
  }

  createCopies(node);

  for (const [original, copy] of lookup.entries()) {
    for (const neighbor of original.neighbors) {
      const copyNeighbor = lookup.get(neighbor);
      copy.neighbors.push(copyNeighbor);
    }
  }

  return lookup.get(node);
};
