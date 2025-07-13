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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (!root) return [];

  const columnTable = {};
  const queue = [[root, 0]];

  /*
    
    [[9,-1],[20,1]]
    
    {
        0: [3],

    }
    
    */
  while (queue.length) {
    const [node, column] = queue.shift();

    if (node !== null) {
      if (!columnTable[column]) {
        columnTable[column] = [];
      }

      columnTable[column].push(node.val);

      queue.push([node.left, column - 1]);
      queue.push([node.right, column + 1]);
    }
  }

  // {
  //     0: [3,15],
  //     -1: [9],
  //     1: []
  // }

  // [[9],[3,15],[20],[7]]

  const columns = Object.keys(columnTable).sort((a, b) => a - b);
  // [0,1,2]

  return columns.map(col => columnTable[col]);
};
