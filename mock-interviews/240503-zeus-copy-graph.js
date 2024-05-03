// Constraints:

// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

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
  // [{neighbors: [2, 4]},{neighbors: []}, {neighbors: []}, {neighbors: []}]
  // handle edge case where node is null
  // map = new Map()
  // q = [node]
  // add original node to map, with copy
  // while q
  // dequeue node
  // if node is not key in map
  // create copy
  // add node as key to map, with copy as value
  // for each neighbor,
  // add each neighbor to queue
  // for each key in map
  // copyNode = map[key]
  // for each neighbor in key
  // copyNode.push(map[neighbor])
  // return map[node]
  //SEND SUBMISSION TO ZEUS
};
