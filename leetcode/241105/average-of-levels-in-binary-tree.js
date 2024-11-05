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

/*
 
 in: node (root of binary tree)
 out: array of numbers

            3
    9              20

15      17      n       n

 */

var averageOfLevels = function (root) {
  const res = [];

  const q = [root];

  // bfs level order
  // while q has length
  // get denominator (num nodes at curr level)

  // sum variable
  // iterate across q from 0 to denominator - 1
  // add val of curr node to sum
  // if left child, push into q
  // if right child, push into  q

  // push division of sum by denominator into res

  while (q.length) {
    const denominator = q.length;
    let sum = 0;

    for (let i = 0; i < denominator; i++) {
      const curr = q.shift();
      sum += curr.val;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    res.push(sum / denominator);
  }

  return res;
};
