// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 *
 * [
 *  [1,0,1],
 *  [1,0,0]
 * ]
 *
 * >> 2
 * [
 *  [0,0,0],
 *  [0,0,0]
 * ]
 * [
 *  [1,1,1],
 *  [1,1,1]
 * ]
 *
 * [[1]]
 *
 * Inputs
 * - type, length, hostile
 * - 2D matrix of 1s and 0s
 * - will not be empty
 * - up-down-right-left connected
 * Outputs:
 * - integer (number of islands)
 * - Can mutate the input array
 *
 * Whichever I'm traversing from to also change that to a star
 */

// * [
// *  ["*",0,1],
// *  ["*",0,0]
// * ]

function countNumberOfIslands(matrix) {
  let count = 0;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function exploreIsland(r, c) {
    if (matrix[r][c] === 0) {
      return false;
    }

    matrix[r][c] = "*";

    // visit neighbors
    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      // skip out of bounds and stars
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === matrix.length ||
        newCol === matrix[0].length
      ) {
        continue;
      }

      if (matrix[newRow][newCol] === "*") {
        continue;
      }

      exploreIsland(newRow, newCol);
    }
    return true;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "*") {
        continue;
      }
      if (exploreIsland(i, j)) {
        count++;
      }
    }
  }

  return count;
}
