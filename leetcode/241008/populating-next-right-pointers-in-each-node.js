/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;

  const q = [root];

  while (q.length) {
    // let prev = null
    const Q = q.length;

    for (let i = 0; i < Q - 1; i++) {
      const curr = q[i];
      curr.next = q[i + 1];
    }

    for (let i = 0; i < Q; i++) {
      const curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    // I don't need to always pop from the q inside the nested for-loop >> you have to be flexible
    // I don't always have to iterate from left to right; I can go from right to left (store a pointer ) // TO DO: Practice doing this reverse approach
  }

  return root;
};
