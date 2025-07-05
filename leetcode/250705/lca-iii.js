/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {
  /*
  
  3,4 > 1
          1
      2       4
  3.     5
           6
  */
  const visited = new Set();
  let lca = null;

  function getNodesFromTargetToRoot(node) {
    if (!node) {
      return null;
    }

    visited.add(node);
    getNodesFromTargetToRoot(node.parent);
  }

  function searchForFirstCommonNode(node) {
    // if(!node) {
    //     return null
    // } // DO I NEED THIS

    if (visited.has(node)) {
      lca = node;
      return;
    }

    searchForFirstCommonNode(node.parent);
  }

  getNodesFromTargetToRoot(p);
  searchForFirstCommonNode(q);
  return lca;
};
