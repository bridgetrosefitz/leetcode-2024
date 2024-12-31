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
var averageOfSubtree = function (root) {
  // get sum and count from left subtree
  // get sum and count from right subtree
  // totalSum = sum of both subtrees + self val
  // totalCount = subtrees + 1

  // increment count if my val is same as average
  // return totalSum, count

  let count = 0;

  /*
    
        5
    6

    >> 2


    */

  function helper(node) {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = helper(node.left); // 6,1
    const [rightSum, rightCount] = helper(node.right); // 0,0

    const currSum = leftSum + rightSum + node.val; // 11
    const currCount = leftCount + rightCount + 1; // 2

    if (Math.floor(currSum / currCount) === node.val) count++;

    return [currSum, currCount];
  }

  helper(root);

  return count;
};
