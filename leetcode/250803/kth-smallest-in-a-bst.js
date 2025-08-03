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
 * @param {number} k
 * @return {number}
 */

class MaxHeap {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.heap = [];
  }

  add(val) {
    if (this.heap.length === this.maxSize) {
      if (val < this.heap.at(-1)) {
        this.heap.pop();
        this.heap.push(val);
      }
    } else {
      this.heap.push(val);
    }
    this.heap.sort((a, b) => a - b);
  }

  peek() {
    return this.heap.at(-1);
  }
}

/*

TIME: nlogn
SPACE: logk 

            3
        1       4
          2


          1
        


*/

var kthSmallest = function (root, k) {
  const vals = [];

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    vals.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return vals[k - 1];
};
