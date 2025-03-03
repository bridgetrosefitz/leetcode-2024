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
var maxLevelSum = function (root) {
  // bfs
  let maxSum = -Infinity; // 1
  let maxLevel = 1; // 2
  let currLevel = 1; // 2
  let currLevelSum = 0; // 1 // 0 7

  const q = [root]; // [1] [7,0] [7,-8]

  while (q.length) {
    const nodesAtCurrLevel = q.length;
    for (let i = 0; i < nodesAtCurrLevel; i++) {
      const curr = q.shift();
      currLevelSum += curr.val;
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }

    if (currLevelSum > maxSum) {
      maxSum = currLevelSum;
      maxLevel = currLevel;
    }

    currLevel++;
    currLevelSum = 0;
  }

  return maxLevel;
};
