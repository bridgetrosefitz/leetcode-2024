/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const ROWS = board.length;
  const COLS = board[0].length;

  function capture(row, col) {
    if (row < 0 || col < 0 || row === ROWS || col === COLS) {
      return false;
    }

    if (board[row][col] !== "O") {
      return false;
    }

    board[row][col] = "T";
    capture(row + 1, col);
    capture(row - 1, col);
    capture(row, col + 1);
    capture(row, col - 1);
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // if we find a 0 in a border cell
      if (
        board[row][col] === "O" &&
        ([0, ROWS - 1].includes(row) || [0, COLS - 1].includes(col))
      ) {
        capture(row, col);
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === "T") {
        board[row][col] = "O";
      }
    }
  }

  return board;
};
