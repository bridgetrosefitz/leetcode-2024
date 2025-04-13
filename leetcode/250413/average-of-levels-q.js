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
var averageOfLevels = function (root) {
  const q = [root];
  const res = [];

  while (q.length) {
    const countNodesAtLevel = q.length;
    let levelSum = 0;

    for (let i = 0; i < countNodesAtLevel; i++) {
      const curr = q.shift();

      levelSum += curr.val;

      if (curr.left) {
        q.push(curr.left);
      }

      if (curr.right) {
        q.push(curr.right);
      }
    }

    res.push(levelSum / countNodesAtLevel);
  }

  return res;
};
