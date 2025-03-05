/**
 * Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.
 */

/**
 *
 *                1
 *            2      3
 * > [[2],[1],[3]]
 *
 * res = [[]]
 * [1,0,0]
 * [2,1,-1]
 *
 *  [[3,1,1],[4,2,0]]
 *
 * INPUTS
 * - type, length, hostile
 * - binary tree
 * - root could be null
 *
 * Node {
 *  left
 *  right
 *  val
 * }
 *
 * OUTPUTS
 * - type, length, mutate
 * - output: int[] (each arr is top to bottom values in one column; sort if two values are in same row + col)
 * - return [] for null root
 *
 *
 */

/**
 *
 *               1
              /      \
            2        3
            \     /     
             6   5      

Input [1,2,3,4,6,5,7]
output: [[4],[2],[1,5,6],[3],[7]]
// handle negative col vals

q = [[1,0,0] // [2,1,-1],[3,1,1] // [6,2,0],[5,2,0]]
                 0
O(n) time
O(n) storage
{
 0: {
      0: [1],
      2: [6,5]
 }
}

 * 
 */

function verticalOrder(root) {
  const lookup = {};

  // bfs
  /**
   *
   *.    1
   * 2        3
   *   4-5
   * 5    7
   *   8-9
   */
  if (!root) {
    return [];
  }
  const q = [[root, 0, 0]];

  while (q.length) {
    const [node, row, col] = q.shift();

    if (lookup[col][row] === undefined) {
      // IF STATEMENT FOR IF DOESN'T EXIST, then ALWAYS PUSH IN
      lookup[col][row] = [node.val];
    } else {
      lookup[col][row].push(node.val);
      const valsAtSameRowCol = lookup[col][row];
      valsAtSameRowCol.sort(); // MAX NUMBER OF R-C clashes will be 2 TO DO - check this
    }

    if (node.left) {
      q.push([node.left, row + 1, col - 1]);
    }

    if (node.right) {
      q.push([node.right, row + 1, col + 1]);
    }
  }

  // combine

  const cols = Object.vals(lookup);
  const rows = cols.flatMap(([rows]) => {
    return Object.vals(rows); // CHECK FLATMAP IMPLEMENTATION

    // {
    //   0: [],
    //   1: []
    // }
  });

  return rows;

  /**
   * [[0,{}]
   *
   */
}
// positiveCols.forEach(col => {
//   negativeCols.push(col)
// })

// return negativeCols
