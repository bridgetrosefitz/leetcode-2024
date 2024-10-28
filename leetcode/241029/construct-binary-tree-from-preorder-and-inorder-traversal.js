/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // preorder - self, left, right
  // inorder - left, self, right

  // preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]

  function recurse(subtreePreorder, subtreeInorder) {
    const rootVal = subtreePreorder[0]; //3
    const root = subtreePreorder.length ? new TreeNode(rootVal) : null;
    if (!root) return root;

    const rootValIndex = subtreeInorder.indexOf(rootVal); //1

    const leftSubtreeInorder = subtreeInorder.slice(0, rootValIndex); // [9]
    const rightSubtreeInorder = subtreeInorder.slice(
      rootValIndex + 1,
      subtreeInorder.length
    ); // [15,20,7]

    const leftSubtreePreorder = subtreePreorder.slice(
      1,
      leftSubtreeInorder.length + 1
    ); // [9]
    const rightSubtreePreorder = subtreePreorder.slice(
      leftSubtreeInorder.length + 1
    ); // [20,15,7]

    const leftSubtree = recurse(leftSubtreePreorder, leftSubtreeInorder);
    const rightSubtree = recurse(rightSubtreePreorder, rightSubtreeInorder);

    root.left = leftSubtree;
    root.right = rightSubtree;

    return root;
  }

  return recurse(preorder, inorder);
};
