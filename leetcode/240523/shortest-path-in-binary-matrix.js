/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1) return -1;

  const queue = [[0, 0]];
  const visited = new Set();
  visited.add(`${0}-${0}`);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ];
  let length = 1;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [currRow, currCol] = queue.shift();
      if (currRow === n - 1 && currCol === n - 1) return length;

      for (const dir of dirs) {
        const neighborRow = currRow + dir[0];
        const neighborCol = currCol + dir[1];
        if (isValid(neighborRow, neighborCol)) {
          queue.push([neighborRow, neighborCol]);
          visited.add(`${neighborRow}-${neighborCol}`);
        }
      }
    }

    length++;
  }

  function isValid(row, col) {
    return (
      !visited.has(`${row}-${col}`) &&
      row >= 0 &&
      col >= 0 &&
      row < n &&
      col < n &&
      grid[row][col] === 0
    );
  }

  return -1;
};
