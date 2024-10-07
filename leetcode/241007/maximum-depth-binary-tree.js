function maxDepth(root) {
  // TOP-DOWN

  let max = 0;

  function traverse(node, level) {
    // if we are at null
    // update max if level is larger than current max
    // go left with level + 1
    // go right with level + 1

    if (node === null) {
      max = Math.max(max, level);
      return;
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return max;
}

//////////////////

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
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const stack = [[root, 1]];

  while (stack.length) {
    const [node, depth] = stack.pop();

    max = Math.max(max, depth);

    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }

  return max;
};
