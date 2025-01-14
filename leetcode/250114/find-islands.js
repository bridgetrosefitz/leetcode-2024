/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let count = 0;

  function findIslands(r, c) {
    grid[r][c] = "*";

    for (const [dR, dC] of directions) {
      const newRow = dR + r;
      const newCol = dC + c;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === grid.length ||
        newCol === grid[0].length
      ) {
        continue;
      }

      if (grid[newRow][newCol] === "*" || grid[newRow][newCol] === "0") {
        continue;
      }

      findIslands(newRow, newCol);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        findIslands(i, j);
      }
    }
  }

  return count;
};
