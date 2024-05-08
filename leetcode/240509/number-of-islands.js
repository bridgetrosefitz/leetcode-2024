/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // to count a new island:
  // you find a 1 which is not connected to any previous 1s we've seen

  // traverse every cell
  // traverse up/down/left/right of that cell
  // if cell is a 1 and if we have not already visited
  // add cell to queue
  // add cell to visited

  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let islands = 0;

  function bfs(r, c) {
    const q = new Queue();
    const cellId = `${r}-${c}`;
    q.enqueue(cellId);
    visited.add(cellId);

    while (q.size()) {
      const currCell = q.dequeue();
      const currRow = parseInt(currCell.split("-")[0]);
      const currCol = parseInt(currCell.split("-")[1]);
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      for (const [dR, dC] of directions) {
        const newR = currRow + dR;
        const newC = currCol + dC;
        const newCellId = `${newR}-${newC}`;
        if (
          isValidCell(newR, newC, grid) &&
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
};

function isValidCell(r, c, matrix) {
  return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
}
