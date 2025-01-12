/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  let lca;

  const findLCA = node => {
    if (!node) return 0;

    const left = findLCA(node.left);
    const right = findLCA(node.right);
    const curr = node.val === startValue || node.val === destValue ? 1 : 0;
    if (left + right + curr >= 2 && !lca) {
      lca = node;
      return;
    }

    return left + right + curr;
  };

  findLCA(root);

  const findPath = (node, value, path) => {
    if (!node) return false;
    if (node.val === value) return path;
    const leftPath = findPath(node.left, value, path + "L");
    const rightPath = findPath(node.right, value, path + "R");
    if (leftPath) return leftPath;
    if (rightPath) return rightPath;
  };

  const toStart = findPath(lca, startValue, "");
  const toDest = findPath(lca, destValue, "");

  return "U".repeat(toStart.length) + toDest;
};
