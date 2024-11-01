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
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let count = 0;

  function traverse(node) {
    if (!node) return [0, 0];

    const [sumLeft, numLeft] = traverse(node.left);
    const [sumRight, numRight] = traverse(node.right);

    const currSum = sumLeft + sumRight + node.val;
    const currNum = numLeft + numRight + 1;
    const avg = Math.floor(currSum / currNum);

    if (avg === node.val) count++;

    return [currSum, currNum];
  }

  traverse(root);

  return count;
};
