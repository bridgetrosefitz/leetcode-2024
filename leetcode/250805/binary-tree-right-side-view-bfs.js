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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const q = [root];
  const res = [];

  while (q.length) {
    const countNodes = q.length;

    for (let i = 0; i < countNodes; i++) {
      const curr = q.shift();

      if (i === countNodes - 1) {
        res.push(curr.val);
      }

      if (curr.left) {
        q.push(curr.left);
      }

      if (curr.right) {
        q.push(curr.right);
      }
    }
  }

  return res;
};
