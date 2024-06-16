/**
 * @param {number[][]} board
 * @return {number}
 */

function getCellCoords(cellNumber, matrix) {
  // subtract 1
  const cols = matrix[0].length;
  const rows = matrix.length;
  const row = cellNumber % cols;
  const col = Math.floor(cellNumber / cols);
  return [row, col];
}

var snakesAndLadders = function (board) {
  const length = board.length;
  const boardCopy = [...board].reverse();

  function intToPos(square) {
    const row = Math.floor((square - 1) / length);
    let col = (square - 1) % length;
    if (row % 2) {
      col = length - 1 - col;
    }
    return [row, col];
  }

  const q = [[1, 0]]; // [square, moves]

  const visited = new Set();

  while (q.length) {
    const [square, moves] = q.shift();

    for (let i = 0; i <= 6; i++) {
      let nextSquare = square + i;
      const [row, col] = intToPos(nextSquare);

      if (boardCopy[row][col] !== -1) {
        nextSquare = boardCopy[row][col];
      }

      if (nextSquare == length * length) return moves + 1;

      if (!visited.has(nextSquare)) {
        visited.add(nextSquare);
        q.push([nextSquare, moves + 1]);
      }
    }

    return -1;
  }
};
