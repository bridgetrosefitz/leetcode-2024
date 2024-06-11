/**
 * @param {number[][]} grid
 * @return {number}
 */

function isOutOfBounds(row, col, grid) {
  return row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
}

var maxAreaOfIsland = function (grid) {
  const gridCopy = grid.map(row => row.slice());
  let counter = 0;
  let max = 0;

  for (let i = 0; i < gridCopy.length; i++) {
    for (let j = 0; j < gridCopy[0].length; j++) {
      counter = 0;
      dfs(i, j);
    }
  }

  function dfs(row, col) {
    if (isOutOfBounds(row, col, gridCopy)) return;
    if (gridCopy[row][col] === 0) return;
    counter += 1;
    gridCopy[row][col] = 0;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);

    max = Math.max(max, counter);
  }

  return max;
};
