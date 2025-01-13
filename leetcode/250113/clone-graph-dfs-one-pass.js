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
  /*
    
    1 - 2
    |
    3 - 4

    */

  if (!node) {
    return null;
  }

  const lookup = new Map();

  function dfs(curr) {
    // if(lookup.has(curr)) {
    //     return lookup.get(curr)
    // }

    const copy = new Node(curr.val);
    lookup.set(curr, copy);

    // dfs on neighbors

    for (const neighbor of curr.neighbors) {
      const copyNeighbor = lookup.get(neighbor) || dfs(neighbor);

      copy.neighbors.push(copyNeighbor);
    }

    // attach neighbors

    // return the node you just created or the one from lookup

    return copy;
  }

  dfs(node);

  return lookup.get(node);
};
