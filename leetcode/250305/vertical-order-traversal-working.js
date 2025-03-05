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

function sortByStringKey(a, b) {
  const aNum = Number(a[0]);
  const bNum = Number(b[0]);
  return aNum - bNum;
}

var verticalTraversal = function (root) {
  const lookup = {};

  // >> [[1,2],[3,4,5]]

  const q = [[root, 0, 0]];

  while (q.length) {
    const [node, row, col] = q.shift();
    if (!lookup[col]) {
      lookup[col] = {};
    }

    if (lookup[col][row]) {
      lookup[col][row].push(node.val);
      lookup[col][row].sort((a, b) => a - b);
    } else {
      lookup[col][row] = [node.val];
    }

    if (node.left) {
      q.push([node.left, row + 1, col - 1]);
    }

    if (node.right) {
      q.push([node.right, row + 1, col + 1]);
    }
  }
  const sortedCols = Object.entries(lookup).sort((a, b) =>
    sortByStringKey(a, b)
  );

  const colValsOnly = sortedCols.map(([key, val]) => val);

  const res = colValsOnly.map(rowsInCol => {
    const sorted = Object.entries(rowsInCol).sort((a, b) =>
      sortByStringKey(a, b)
    );
    const rowValsOnly = sorted.map(([key, val]) => val);
    return rowValsOnly.flatMap(val => val);
  });

  return res;
};
