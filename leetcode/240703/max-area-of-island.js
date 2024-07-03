/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  const gridCopy = [];
  grid.forEach((row, index) => (gridCopy[index] = [...row]));

  let max = -Infinity;
  let curr = 0;

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= gridCopy.length ||
      col >= gridCopy[0].length
    )
      return;
    if (gridCopy[row][col] === 0) return;

    curr += 1;
    gridCopy[row][col] = 0;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  // run dfs on every cell
  for (let i = 0; i < gridCopy.length; i++) {
    for (let j = 0; j < gridCopy[0].length; j++) {
      console.log(max);
      dfs(i, j);

      max = Math.max(max, curr);
      curr = 0;
    }
  }

  return max;
};
