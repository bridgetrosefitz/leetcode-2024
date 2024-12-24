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
var maxPathSum = function (root) {
  /*
    3
        2
    -1.   4

    */
  // bottom up makes sense for this type of problem because you can build bbigger solutiosn from smaller ones - we can combine and merge paths from bottom up. We've seen what's below, so we know we have the best solution so far
  // if you're going top-down you have to make decisions without knowing what comes later (aka greedy does not work)

  let globalMax = -Infinity; // 6
  // [1,2,3]
  function dfs(node) {
    if (!node) return 0;

    const leftSubtree = dfs(node.left);
    const rightSubtree = dfs(node.right);
    // update max based on 4 cases
    // pass up max sum from 3 cases only
    const sum1 = leftSubtree + rightSubtree + node.val;
    const sum2 = leftSubtree + node.val;
    const sum3 = rightSubtree + node.val;
    const sum4 = node.val;
    const maxSum = Math.max(sum1, sum2, sum3, sum4);

    if (maxSum > globalMax) {
      globalMax = maxSum;
    }

    return Math.max(sum2, sum3, sum4);
  }

  dfs(root);

  return globalMax;
};
