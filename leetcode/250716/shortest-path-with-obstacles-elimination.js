/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

var shortestPath = function (grid, k) {
  if (k - grid[0][0] < 0) {
    return -1;
  }

  const ROWS = grid.length; // 5
  const COLS = grid[0].length; // 3

  const q = [[0, 0, k, 0]]; // r, c, bombsRemaining, steps
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => new Set())
  );
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (q.length) {
    const [r, c, bombsRemaining, stepsTaken] = q.shift();

    const newBombsRemaining = bombsRemaining - grid[r][c];

    if (newBombsRemaining < 0) {
      continue;
    }

    if (r === ROWS - 1 && c === COLS - 1) {
      return stepsTaken;
    }

    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (newRow < 0 || newCol < 0 || newRow === ROWS || newCol === COLS) {
        continue;
      }

      const cellVisited = visited[newRow][newCol];
      if (cellVisited.has(newBombsRemaining)) {
        continue;
      }

      q.push([newRow, newCol, newBombsRemaining, stepsTaken + 1]);
      visited[newRow][newCol].add(newBombsRemaining);
    }
  }

  return -1;
};
