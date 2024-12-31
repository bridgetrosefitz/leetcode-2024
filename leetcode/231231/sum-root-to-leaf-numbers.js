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
var sumNumbers = function (root) {
  /*
    
        1
    2

    4 * 10^0 = 4

    4 * 10^1 = 40 + 9

    49 * 10^1    
    

    // res = 12

        1       // curr = 0, acc = 1
    2       3.  // curr = 1, acc = 12 // curr = 1, acc = 13


    Failure journal 
    - maybe keep single number variables at each level; keep example small so you don't get lost
    - have the f-ing base case for null node
    - check let / const

    */

  let res = 0; // 12 13 //

  function helper(node, curr) {
    // 1
    if (!node) return;
    const accNumber = curr * 10 + node.val;
    if (!node.left && !node.right) {
      res += accNumber;
    }

    helper(node.left, accNumber);
    helper(node.right, accNumber);
  }

  helper(root, 0);

  return res;
};
