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
var maxLevelSum = function (root) {
  /*
  INPUT (type length hostile)
  - node: root of binary tree
  - assume root not null
  - vals - positive or negative

  Node {
      val
      left
      right    
  }

  OUTPUT (type length mutate)
  - int: level (where root is 1; SMALLEST possible; SUM of vals at that level is largest in tree)

  EXAMPLE

          1
      1       2

      > 2

          3
      1       2

      > 1

          1
              2
      > 2

          1
      1       -2

      > 1

  APPROACH

  - level order traversal (root - down)
  - get sum of each level
  - compare to max, and if smaller, update
  - return max
  - time: O(n), space: O(width of tree) > O(2 ^ height - 1)
  */

  const q = [root]; // []
  let sum = 0; // 0 1 0 1 3 0
  let currLevel = 1; // 1 2 3
  let maxSum = root.val; // TO DO: check if this is most suitable
  // 1 1 3
  let maxSumLevel = 1; // 1 2

  while (q.length) {
    const numNodesAtLevel = q.length; // 1 2
    for (let i = 0; i < numNodesAtLevel; i++) {
      const curr = q.shift(); // 1 1
      sum += curr.val;

      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }

    if (sum > maxSum) {
      maxSum = sum;
      maxSumLevel = currLevel;
    }

    currLevel++;
    sum = 0;
  }

  return maxSumLevel;
};
