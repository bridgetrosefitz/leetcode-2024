/**
 * @param {number[][]} grid
 * @return {number}
 */

function isOutOfBounds(row, col, grid) {
  return row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
}

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  function dfs(row, col) {
    let area = 1;
    grid[row][col] = 0;

    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;

      if (isOutOfBounds(newRow, newCol, grid)) continue;
      if (grid[newRow][newCol] === 0) continue;
      area += dfs(newRow, newCol);
    }

    return area;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;
      maxArea = Math.max(maxArea, dfs(i, j));
    }
  }

  return maxArea;
};
