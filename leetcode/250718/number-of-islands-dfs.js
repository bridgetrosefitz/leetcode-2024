/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function exploreIsland(r, c) {
    grid[r][c] = "*";

    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= grid.length ||
        newCol >= grid[0].length
      ) {
        continue;
      }

      if (grid[newRow][newCol] !== "1") {
        continue;
      }

      exploreIsland(newRow, newCol);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        exploreIsland(i, j);
      }
    }
  }

  return count;
};
