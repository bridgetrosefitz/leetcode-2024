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
var verticalOrder = function (root) {
  if (!root) return [];

  const columnItems = new Map();

  const queue = [[0, root]];

  let minX = Infinity;
  let maxX = -Infinity;

  const res = [];

  while (queue.length) {
    const [x, node] = queue.shift();

    const nodeVals = columnItems.get(x);
    if (nodeVals) {
      nodeVals.push(node.val);
    } else {
      columnItems.set(x, [node.val]);
    }

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);

    if (node.left) queue.push([x - 1, node.left]);
    if (node.right) queue.push([x + 1, node.right]);
  }

  for (let i = minX; i <= maxX; i++) {
    res.push(columnItems.get(i));
  }

  return res;
};
