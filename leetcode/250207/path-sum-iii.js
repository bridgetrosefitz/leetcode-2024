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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const sums = {};
  let paths = 0;

  const traverse = (node, prevSum) => {
    if (node === null) {
      return;
    }

    const currSum = prevSum + node.val;

    if (currSum === targetSum) {
      paths++;
    }

    if (sums[currSum - targetSum]) {
      paths += sums[currSum - targetSum];
    }

    if (!sums[currSum]) {
      sums[currSum] = 0;
    }

    sums[currSum]++;

    traverse(node.left, currSum);
    traverse(node.right, currSum);

    sums[currSum]--;
  };

  traverse(root, 0);

  return paths;
};
