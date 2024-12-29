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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  /*
    
        4
      /.  \
      2.   X
     / \
     X  X
   

        4
       /  \
      X.  2
    
    */

  if (!root) return null;

  const q = [root]; // 2

  while (q.length) {
    const nodesAtLevel = q.length;
    for (let i = 0; i < nodesAtLevel; i++) {
      const curr = q.shift();

      if (curr.left) {
        q.push(curr.left);
      }

      if (curr.right) {
        q.push(curr.right);
      }

      const temp = curr.right; // null
      curr.right = curr.left; // 2
      curr.left = temp;
    }
  }

  return root;
};
