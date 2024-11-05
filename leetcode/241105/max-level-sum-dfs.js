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
  // arr storing currSum of each level (index is level)
  const levels = [];

  // dfs recursive function (node, level)
  // if node is null, return null

  // add node val to sum at 'level'
  // run dfs on left child, level + 1
  // run dfs on right child, level + 1

  function dfs(node, level) {
    if (!node) {
      return null;
    }

    if (levels[level] !== undefined) {
      levels[level] += node.val;
    } else {
      levels[level] = node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  // invoke dfs with level 0

  dfs(root, 0);

  let max = -Infinity;
  let maxLevel = 0;

  // for each el and index in currSum arr
  // if value at el is greater than max
  // update max to be el
  // update maxLevel to be i

  levels.forEach((sum, i) => {
    if (sum > max) {
      max = sum;
      maxLevel = i;
    }
  });

  return maxLevel + 1;
  // return maxLevel + 1 (bc 1-indexed)
};

// ========
