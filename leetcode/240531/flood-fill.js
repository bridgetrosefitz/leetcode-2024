function floodFill(image, sr, sc, newColor) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [[sr, sc]];

  const sourceColor = image[sr][sc];

  while (q.length) {
    // process cell

    const [row, col] = q.shift();

    if (image[row][col] === newColor) continue;
    image[row][col] = newColor;
    const coords = encodeCoords(row, col);
    visited.add(coords);

    // queue up neighbors
    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;
      if (isOutOfBounds(newRow, newCol, image)) continue;
      if (visited.has(encodeCoords(newRow, newCol))) continue;
      if (image[newRow][newCol] !== sourceColor) continue;
      q.push([newRow, newCol]);
    }
  }

  return image;
}

const encodeCoords = (row, col) => `${row}-${col}`;
const decodeCoords = coords => [
  parseInt(coords.split("-")[0]),
  parseInt(coords.split("-")[1]),
];

function isOutOfBounds(row, col, grid) {
  return row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
}
