/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function buildTree(arr) {
    if (arr.length <= 2) {
      if (arr.length === 0) return null;
      const root = new TreeNode(arr[0]);
      if (arr.length === 2) root.right = new TreeNode(arr[1]);
      return root;
    }

    const midPoint = Math.floor((arr.length - 1) / 2);
    const centerNode = new TreeNode(arr[midPoint]);

    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint + 1, arr.length);

    const leftTree = buildTree(leftArr);
    const rightTree = buildTree(rightArr);

    centerNode.left = leftTree;
    centerNode.right = rightTree;

    return centerNode;
  }

  return buildTree(nums);
};
