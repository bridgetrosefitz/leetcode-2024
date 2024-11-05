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

/*
 
 in: node (root of binary tree)
 out: integer (sum of all root to leaf numbers)

                        4
            9                       0
        5       1               1       n

running total = 1 + 90 + 5 + 90 + 400 + 400 + 0 + 400

left = 10
right = null

if(left) add multiplier * val of curr node to running total


[1,10]
[91,100] >> 90 + 1
[]

[5,10]
[95, 100]

[1,10]

- one node only
- left child only
- right child only
- different levels in each subtree


 */
var sumNumbers = function (root) {
  //                4
  //     9                       0
  // 5       1               1       n

  // rynning total variable
  // dfs(node, curr)
  // if null node, return null
  // if leaf node
  // add curr * 10 + curr node value to running total
  // pass curr * 10 + curr node value to left child
  // pass curr * 10 + curr node value to right child

  // return running total

  let overallTotal = 0;

  function dfs(node, currTotal) {
    if (!node) return null;
    if (!node.left && !node.right) {
      overallTotal += currTotal * 10 + node.val;
    }

    dfs(node.left, currTotal * 10 + node.val);
    dfs(node.right, currTotal * 10 + node.val);
  }

  dfs(root, 0);
  return overallTotal;
};
