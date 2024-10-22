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
 * @return {number[]}
 */
var rightSideView = function (root) {
  //     1
  // 2       3
  //  5       4

  //     1
  // 2       3
  //  4

  //     1
  // 2       3
  //        4

  //     1
  //    2
  //   3

  // return the right-most node at each level
  if (!root) return [];
  const q = [root]; //[5,4] ////////
  const res = []; //[1,3] ////////

  while (q.length) {
    const numberNodesInLevel = q.length; //1 //2
    for (let i = 0; i < numberNodesInLevel; i++) {
      // grab curr node //1 //2 //3
      const curr = q.shift();
      // if index is numberNodesInLevel - 1
      // push node value into res
      // push left child if has one
      // push right child if has one

      if (i === numberNodesInLevel - 1) {
        res.push(curr.val);
      }

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
  }

  return res;
};
