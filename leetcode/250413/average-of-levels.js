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
var averageOfLevels = function (root) {
  /*

    Examples

        1
    2       3
    >> [1, 2.5]

    currNodes = [root]
    currSum = 1 0 5
    countNodes = 1 2
    const res = [1]

    while currNodes.length
    nextLevelNodes = [2,3]
    

        1
    -2
    >> [1,-2]

        0
    4       -4
    >> [0,0]

    Approach

    
    Inputs
    - type, length, hostile
    - node, root of BINARY tree
    - vals could be negative
    - root will exist
    
    Node {
        this.val
        this.left
        this.right
    }

    Outputs
    - type, length, mutate
    - int[] >> average at each level
    - decimal place

    Time / space
    - time O(n)
    - space O(height) > O(n) worst case; best O(logn)
    */

  let currNodes = [root]; // [1] [2,3]
  const res = []; // [1,]

  while (currNodes.length) {
    let levelSum = 0; // 1 0
    const countNodes = currNodes.length; // 1 2
    const nextLevelNodes = []; // [2,3]

    currNodes.forEach(node => {
      levelSum += node.val;
      if (node.left) {
        nextLevelNodes.push(node.left);
      }

      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    });

    res.push(levelSum / countNodes);
    currNodes = nextLevelNodes;
  }

  return res;
};
