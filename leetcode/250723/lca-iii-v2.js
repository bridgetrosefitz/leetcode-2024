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
  let pNode = p;
  const pAncestors = new Set();

  while (pNode) {
    pAncestors.add(pNode);
    pNode = pNode.parent;
  }

  let qNode = q;

  while (qNode) {
    if (pAncestors.has(qNode)) {
      return qNode;
    }
    qNode = qNode.parent;
  }
};
