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
var verticalTraversal = function (root) {
  const colMap = new Map();
  const q = [[root, 0, 0]];

  while (q.length) {
    const [node, row, col] = q.shift();

    if (!colMap.has(col)) {
      colMap.set(col, new Map());
    }

    if (!colMap.get(col).has(row)) {
      colMap.get(col).set(row, []);
    }

    colMap.get(col).get(row).push(node.val);

    if (node.left) {
      q.push([node.left, row + 1, col - 1]);
    }

    if (node.right) {
      q.push([node.right, row + 1, col + 1]);
    }
  }

  const res = [];

  // get all cols we saw, in sorted order (to put negatives first)
  // sort rows in that col
  sortedCols = Array.from(colMap.keys()).sort((a, b) => a - b);
  for (const col of sortedCols) {
    const rowMap = colMap.get(col);

    const colVals = [];

    for (const row of rowMap.keys()) {
      const values = rowMap.get(row);
      values.sort((a, b) => a - b);
      colVals.push(...values);
    }

    res.push(colVals);
  }

  return res;
};
