/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const q = [];
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];
  const visited = new Set();
  const targetRow = grid.length - 1;
  const targetCol = grid[0].length - 1;

  if (grid[0][0] !== 0) return -1;
  q.push([0, 0, 1]);

  while (q.length) {
    const [currRow, currCol, currLength] = q.shift();

    if (currRow === targetRow && currCol === targetCol) return currLength;

    visited.add(`${currRow}-${currCol}`);

    for (const [dR, dC] of dirs) {
      const newRow = currRow + dR;
      const newCol = currCol + dC;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= grid.length ||
        newCol >= grid[0].length
      )
        continue;
      if (visited.has(`${newRow}-${newCol}`)) continue;
      if (grid[newRow][newCol] === 1) continue;
      q.push([newRow, newCol, currLength + 1]);
    }
  }

  return -1;
};
