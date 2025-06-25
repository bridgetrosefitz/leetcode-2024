/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let count = 0;
  const q = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        q.push([i, j]);

        while (q.length) {
          const [row, col] = q.shift();
          if (grid[row][col] === "0") {
            continue;
          }

          grid[row][col] = "0";

          for (const [dR, dC] of dirs) {
            const newRow = row + dR;
            const newCol = col + dC;

            if (
              newRow < 0 ||
              newCol < 0 ||
              newRow === grid.length ||
              newCol === grid[0].length
            ) {
              continue;
            }

            if (grid[newRow][newCol] === "0") {
              continue;
            }

            q.push([newRow, newCol]);
          }
        }
      }
    }
  }

  return count;
};
