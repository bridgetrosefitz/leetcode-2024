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


                        3
                    n       8
                        7       n
                    n       n
                    ans: [3,7][8]

BFS
                    [3]
                    [8]
                    [7]

                    [3]
                    [n, 8]
                    [7,n]
                    [n,n]

                    ===
DFS

                    0
                -1      1
                    0       2

O(n) storage - suboptimal
- Preorder
- columnsObj
- create key or add to arr at key and push curr node into arr at that key
- recurse on left, with col =  col - 1
- recruse on right, with col = col + 1
- return vals of obj

Cases
- right child then left child
- left child then right child
- two nodes at same vertical position
- empty root
- root only

IN: root of tree (could be null)
OUT: array of arrays (each subarray is top to bottom, left to right columns)
 */
var verticalOrder = function (root) {
  if (!root) return [];
  const columns = new Map();
  /* {
        0: [1,7]
        1: [8]


                        1
                2               3
            4          10,9.  11
        5               

    } */

  function dfs(node, col) {
    // 0
    if (!node) return null;

    if (columns.has(col)) {
      const valsInCol = columns.get(col);
      valsInCol.push(node.val);
    } else {
      columns.set(col, [node.val]);
    }

    dfs(node.left, col - 1);
    dfs(node.right, col + 1);
  }

  dfs(root, 0);

  const entries = Array.from(columns.entries());

  return entries.sort((a, b) => a[0] - b[0]).map(tuple => tuple[1]);
};
