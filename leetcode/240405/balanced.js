// Given a binary tree, determine if it is height-balanced

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // minLevel
  // maxLevel
  // dfs function (node, level)
  // am I a leaf node
  // is my level smaller than min?
  // update minLevel
  // is my level larger than max?
  // update maxLevel
  // return
  // else
  // recurse on left (level + 1)
  // recurse on right (level + 1)
  // call dfs(root, 0)
  // if diff min and max > 2
  // return false
  // else
  // return true
};

// Example 1
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
