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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  /*

    7 nodes
    currPath = []


    Best time: O(n)
    Best space: O(n^n)

    // track curr sum
    // track currPath
    // at leaf node, if currSum + node.val -== target, push path into res
    
    */

  const res = []; // [1,2,3]
  const currPath = []; // [1,2]
  /*
target = 6

        1
    2       2
 3     3.  3.  3
     4

*/
  function buildPath(node, currSum) {
    // sum = 0 1 3 6
    if (!node) {
      return false;
    }

    if (!node.left && !node.right) {
      if (currSum + node.val === targetSum) {
        res.push([...currPath, node.val]);
        return true;
      }
    }

    // go left with self added to path
    // go right with self added to path
    currPath.push(node.val);
    buildPath(node.left, currSum + node.val);
    buildPath(node.right, currSum + node.val);
    // pop self from currPath
    currPath.pop();

    return false;
  }

  buildPath(root, 0);

  return res;
};
