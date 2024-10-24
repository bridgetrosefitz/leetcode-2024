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
  // CASES
  // 1 node

  //           1
  //     2.         3
  // 4.     5

  const res = [];

  // [[4,5]]

  // the 'reverse-depth' that I am at is the array I should go in

  // dfs()
  // if we hit a node with no children
  // we are at depth 0, therefore:
  // if res[0] exists
  // push curr val into array at res[0]
  // else
  // create array at res[0] which contains curr val
  // return 0

  // currNodeDepth = max of dfs(left child) and dfs(right child) + 1

  // if res[currDepth] exists
  // push curr node val into array at currNodeDepth
  // else
  // create array at res[currDepth] which contains curr val
  // return currNodeDepth

  // return res

  // [[2]]
  //     1
  //    2

  function dfs(node) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      if (res[0]) {
        res[0].push(node.val);
      } else {
        res[0] = [node.val];
      }

      return 0;
    }

    const currNodeDepth = Math.max(dfs(node.left), dfs(node.right)) + 1;

    if (res[currNodeDepth]) {
      res[currNodeDepth].push(node.val);
    } else {
      res[currNodeDepth] = [node.val];
    }

    return currNodeDepth;

    /// TO DO - check we are not going to access left or right on null
  }

  dfs(root);
  // res[dfs(root) + 1] = [root.val]

  return res;
};
