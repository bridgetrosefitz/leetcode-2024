/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  const gridRows = grid.length;
  const gridCols = grid[0].length;

  const q = [[0, 0, k, 0]]; // r,c,bombs,steps
  const visited = new Set();
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (q.length) {
    const [r, c, bombs, steps] = q.shift();

    if (grid[r][c] === 1 && bombs === 0) {
      continue;
    }

    if (r === gridRows - 1 && c === gridCols - 1) {
      return steps;
    }

    const newBombs = grid[r][c] === 1 ? bombs - 1 : bombs;

    // queue up

    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === gridRows ||
        newCol === gridCols
      ) {
        continue;
      }

      if (visited.has(`${newRow}-${newCol}-${newBombs}`)) {
        continue;
      }

      if (newBombs < 0) {
        continue;
      }

      q.push([newRow, newCol, newBombs, steps + 1]);
      visited.add(`${newRow}-${newCol}-${newBombs}`);
    }
  }

  return -1;
};
