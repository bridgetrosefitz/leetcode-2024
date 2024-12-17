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
var findLeaves = function (root) {
  // bfs keeping track of level
  // push nodes into res[level]
  // remove connection to children after queued up

  const res = []; //[[1],[2]]

  const q = [root]; //[3,4,5]
  let level = 0; // 0 > 1

  while (q.length) {
    const numNodesAtCurrLevel = q.length; // 1 2
    for (let i = 0; i < numNodesAtCurrLevel; i++) {
      const curr = q.shift();
      if (res[level]) {
        res[level].push(curr.val);
      } else {
        res[level] = [curr.val];
      }

      if (curr.left) {
        q.push(curr.left);
        curr.left = null;
      }

      if (curr.right) {
        q.push(curr.right);
        curr.right = null;
      }
    }

    level++;
  }

  return res.reverse();
};
