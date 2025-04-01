/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

const getKey = (r, c, b) => `${r}-${c}-${b}`;
const parseKey = str => {
  const [rowStr, colStr, bombsStr] = str.split("-");
  return [parseInt(rowStr), parseInt(colStr), parseInt(bombsStr)];
};

var shortestPath = function (grid, k) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const q = [[0, 0, k, 0]]; // r,c,bombs,steps
  const visited = new Set();
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (q.length) {
    const [r, c, bombs, steps] = q.shift();

    if (grid[r][c] === 1 && bombs === 0) {
      continue;
    }

    if (r === ROWS - 1 && c === COLS - 1) {
      return steps;
    }

    const newBombs = grid[r][c] === 1 ? bombs - 1 : bombs;

    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (newRow < 0 || newCol < 0 || newRow === ROWS || newCol === COLS) {
        continue;
      }

      if (visited.has(getKey(newRow, newCol, newBombs))) {
        continue;
      }

      if (newBombs < 0) {
        continue;
      }

      q.push([newRow, newCol, newBombs, steps + 1]);
      visited.add(getKey(newRow, newCol, newBombs));
    }
  }

  return -1;
};
