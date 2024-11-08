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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 
                    1
            2               3
        n        4       n       5

            [1]
            [2,3]
            [4,5]
 
                     1
            2               3
        n        4       5       n

// 
    
 
 */

var isCousins = function (root, x, y) {
  // track currLevel
  // track xPosition
  // track yPosition
  // bfs
  // create new arr for nextLevelNodes
  // iterate through nodes at each level
  // if we find x
  // set value of xPosition to floor of i / 2
  // ditto for y
  // queue up next nodes
  // if xPosition !== -1 and !!yPosition !== -1, if xPosition does not equal yPosition, return true
  // if one of xPosition or yPosition cast to T/F, return false

  // return false

  let xPosition = -1;
  let yPosition = -1;

  let currNodes = [root];

  while (currNodes.length) {
    const nextNodes = [];
    currNodes.forEach((node, i) => {
      if (node === null) return;
      if (node.val === x) {
        xPosition = Math.floor(i / 2);
      }
      if (node.val === y) {
        yPosition = Math.floor(i / 2);
      }

      nextNodes.push(node.left);
      nextNodes.push(node.right);
    });

    if (xPosition !== -1 && yPosition !== -1) {
      if (xPosition !== yPosition) {
        return true;
      }
    }

    if (xPosition !== -1 || yPosition !== -1) {
      return false;
    }

    currNodes = nextNodes;
  }

  return false;
};
