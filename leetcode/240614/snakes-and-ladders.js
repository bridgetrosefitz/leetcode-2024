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
  // min
  // array to memoise min rolls for each square, filled with Infinity
  // q
  // put [0,0] in q
  // for i, between 0 - 5
  // get cell value from adding i
  // if cell value is row 0, col length[0] - 1, update min steps with 1
  // min steps = min of steps + 1 and current value in memo
  // while value in cell is not -1
  // get new cell value from cell
  // min steps = min of steps + 1 and current value in memo
  // return min
};
