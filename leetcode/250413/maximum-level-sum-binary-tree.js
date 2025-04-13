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

                1
            7       -8

            maxSum = -Infinity > 1
            maxLevel = -Infinity > 1
            >> 1

            1
        1
        
        >> 1

    
    Inputs:
    - type, length, hostile
    - node - root of binary tree (level of root is 1)
    - vals could be negative
    - root could be null

    Outputs: 
    - type, length, mutate
    - int - LEVEL (of level with max sum -- smallest level)

    Approaches:
    - bfs, looking at nodes level by level
    - calculate sum at each level
    - update maxSum if curr sum is greater

    Time / space:
    time - O(n)
    space - O(1)
    
    */

  if (!root) {
    return 0;
  }

  let maxSum = -Infinity; // -Infinity 1
  let maxSumlevel = -Infinity; //-Infinity 1
  let currSum = 0; // 0 1
  const q = [[root, 1]]; // []

  // [[-8,2]]

  while (q.length) {
    const numNodes = q.length; // 1 2

    for (let i = 0; i < numNodes; i++) {
      const [node, level] = q.shift();
      currSum += node.val;

      if (node.left) {
        q.push([node.left, level + 1]);
      }

      if (node.right) {
        q.push([node.right, level + 1]);
      }

      if (i === numNodes - 1 && currSum > maxSum) {
        maxSum = currSum;
        maxSumLevel = level;
      }
    }

    currSum = 0; // 7 -1
  }

  return maxSumLevel;
};
