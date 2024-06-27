var numIslands = function (grid) {
  // traverse every cell
  // if we find a 1, apply BFS to identify all connected 1s, in order to NOT count them again
  let count = 0;
  let visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cellId = `${i}-${j}`;
      if (grid[i][j] === "1" && !visited.has(cellId)) {
        count++;
        bfs(i, j);
      }
    }
  }

  function bfs(row, col) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const q = [];
    q.push(`${row}-${col}`);
    visited.add(`${row}-${col}`);

    while (q.length) {
      const currCell = q.shift();
      const row = parseInt(currCell.split("-")[0]);
      const col = parseInt(currCell.split("-")[1]);

      for (const dir of dirs) {
        const newRow = row + dir[0];
        const newCol = col + dir[1];
        const newCell = `${newRow}-${newCol}`;

        if (
          visited.has(newCell) ||
          !isValidCell(newRow, newCol, grid) ||
          grid[row][col] === "0"
        )
          continue;
        q.push(newCell);
        visited.add(newCell);
      }
    }
  }

  return count;
};

function isValidCell(row, col, grid) {
  return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
}
