/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// DO ITERATIVE VERSION LATER
// TEST IF YOU NEED TO MOVE THE HELPER FUNCTIONS UP
// SEE WHAT HAPPENS IF WE DON'T WRAP EVERY SINGLE DFS CALL IN IF STATEMENT
// FIGURE OUT MORE ELEGANT WAY THAN ABOVE

var exist = function (board, word) {
  function dfs(index, row, col, visited = new Set()) {
    if (index === word.length) return true;
    if (!isValidCell(row, col)) return;
    const cellId = getCellId(row, col);
    if (visited.has(cellId)) return;
    // out of bounds
    // if reached end of word
    // if in visited

    // if found letter we're looking for
    // add letter to visited
    // do dfs on up, down, left right, incrementing index
    if (board[row][col] === word[index]) {
      visited.add(cellId);
      if (dfs(index + 1, row + 1, col, visited)) return true;
      if (dfs(index + 1, row - 1, col, visited)) return true;
      if (dfs(index + 1, row, col + 1, visited)) return true;
      if (dfs(index + 1, row, col - 1, visited)) return true;
      visited.delete(cellId);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(0, i, j)) return true;
    }
  }

  return false;

  function isValidCell(row, col) {
    return row >= 0 && col >= 0 && row < board.length && col < board[0].length;
  }

  function getCellId(row, col) {
    return `${row}-${col}`;
  }
};
