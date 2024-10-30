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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const q = [root];
  const ans = [];

  while (q.length) {
    const nodesAtLevel = q.length;
    const temp = [];

    for (let i = 0; i < nodesAtLevel; i++) {
      const curr = q.shift();
      temp.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    ans.push(temp);
  }

  return ans;
};
