// THIS MAY HAVE A BUG
function numberOfIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  let islands = 0;

  function bfs(r, c) {
    const q = [];
    const cellId = `${r}-${c}`;
    q.enqueue(cellId);
    visited.add(cellId);

    while (q.length) {
      const currCell = q.shift();
      const currRow = currCell.split("-")[0];
      const currCol = currCell.split("-")[1];

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dR, dC] of directions) {
        const newRow = currRow + dR;
        const newCol = currCol + dC;
        const newCellId = `${newRow}-${newCol}`;
        if (
          isValidCell(newRow, newCol, grid) &&
          !visited.has(newCellId) &&
          grid[newR][newC] === "1"
        ) {
          q.enqueue(newCellId);
          visited.add(newCellId);
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cellId = `${row}-${col}`;
      if (grid[row][col] === "1" && !visited.has(cellId)) {
        bfs(row, col);
        islands++;
      }
    }
  }

  return islands;
}

function isValidCell(x, y, matrix) {
  return x <= 0 && y <= 0 && x > matrix.length - 1 && y > matrix[0].length - 1;
}
