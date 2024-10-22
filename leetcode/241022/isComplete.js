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
 * @return {boolean}
 */

//         1
//     2       3
// 4      5.  6

var isCompleteTree = function (root) {
  // if we encounter a null in our queue, there must not be any non-null nodes afterwards
  let seenNull = false;
  const q = [root]; //[null,null, null, null, null, null, null]

  while (q.length) {
    const curr = q.shift(); //1 //2 //3 //4 //5 //6 //null
    if (!curr) {
      seenNull = true; // true
      continue;
    } else {
      if (seenNull) return false;
    }
    q.push(curr.left);
    q.push(curr.right);
  }

  return true;
};
