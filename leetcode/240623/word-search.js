/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//REDO THIS WITH BFS
var exist = function (board, word) {
  const numCells = board.length * board[0].length;

  // if word length is greater than m x n, return false
  if (word.length > numCells) return false;

  const used = new Set();

  function dfs(row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
      return;
    if (used.has(`${row}-${col}`)) return;
    if (board[row][col] !== word[index]) return;
    used.add(`${row}-${col}`);

    const up = dfs(row - 1, col, index + 1);
    const down = dfs(row + 1, col, index + 1);
    const right = dfs(row, col + 1, index + 1);
    const left = dfs(row, col - 1, index + 1);

    if (up || down || right || left) return true;
    used.delete(`${row}-${col}`);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
