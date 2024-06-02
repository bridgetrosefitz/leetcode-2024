/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const isOutOfBounds = (row, col, grid) => {
  return row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
};
const encodeId = (row, col) => `${row}-${col}`;

var floodFill = function (image, sr, sc, newColor) {
  const q = [];
  const initialColor = image[sr][sc];
  const visited = new Set();
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  q.push([sr, sc]);

  while (q.length) {
    const [row, col] = q.shift();

    // change cell color and add to visited
    if (image[row][col] === newColor) continue;
    image[row][col] = newColor;

    const cellId = encodeId(row, col);
    visited.add(cellId);

    // queue up next level from current cell
    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;

      const newCellId = encodeId(newRow, newCol);

      if (isOutOfBounds(newRow, newCol, image)) continue;
      if (visited.has(newCellId)) continue;

      if (image[newRow][newCol] !== initialColor) continue;

      q.push([newRow, newCol]);
    }
  }
  return image;
};
