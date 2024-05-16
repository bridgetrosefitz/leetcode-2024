/**
 * @param {character[][]} binaryMatrix
 * @return {number}
 */

// THIS HAS A BUG - RETURNING 12 instead of 6 on

// getNumberOfIslands([ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]
var numIslands = function (grid) {
  const rows = binaryMatrix.length;
  const cols = binaryMatrix[0].length;

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
          isValidCell(newR, newC, binaryMatrix) &&
          !visited.has(newCellId) &&
          binaryMatrix[newR][newC] === "1"
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
      if (binaryMatrix[row][col] === "1" && !visited.has(cellId)) {
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
