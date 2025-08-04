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
var boundaryOfBinaryTree = function (root) {
  /*
    dfs to collect nodes in root left subtree []
    dfs to collect nodes in right subtree []
    dfs to collect bottom nodes[]
    strip out left and right from bottom
    reverse right
    concatenate with root
    pass over to remove duplicates
    
    LEFT/RIGHT SIDE VIEW APPROACH
    bottom [2,4]
    left [1,2,4]. right[1,3,4]

    DFS APPROACH
    left [2].   right [3,4,5]
    preorder traversal
    if 'ideal' child returns false, go other way
    null node returns false

    reverse right result

     left [2,3] right [4]

          1
    2           4
        3

    [1,2,3,4]

          1
             3
            4
    [1,3,4]

          1

    [1] 
    
    Build
    */

  if (!root.left && !root.right) {
    return [root.val];
  }
  const left = [];
  const right = [];
  const bottom = [];
  /* 

    left [2]
    right [3,4,5]
    bottom []
          1
      2       3
            4
              5
     [1,2,5,4,3]

     */
  function getLeft(node) {
    if (!node) {
      return false;
    }

    left.push(node.val);

    if (!getLeft(node.left)) {
      getLeft(node.right);
    }

    return true;
  }

  /*
    
        1
            2
           3. 4
    */

  function getRight(node) {
    if (!node) {
      return false;
    }

    right.push(node.val);

    if (!getRight(node.right)) {
      getRight(node.left);
    }

    return true;
  }

  function getBottom(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      bottom.push(node.val);
    }

    getBottom(node.left);
    getBottom(node.right);
  }

  getLeft(root.left);
  getRight(root.right);
  getBottom(root);

  root.right && bottom.pop();

  return [root.val]
    .concat(left)
    .concat(root.left ? bottom.slice(1) : bottom)
    .concat(right.reverse());
};
