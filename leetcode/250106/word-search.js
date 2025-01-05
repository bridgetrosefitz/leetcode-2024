/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /*
    
    A B
    *.*

    "SF"


    
    */

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function dfs(r, c, i) {
    // 0,1,0 1,1,1 OR 0,0,1
    // if length of word reached, return true
    if (i === word.length) {
      return true;
    }

    if (r < 0 || c < 0 || r === board.length || c === board[0].length) {
      return false;
    }

    const ch = board[r][c]; // A B S F // A

    if (ch === "*") {
      return false;
    }

    if (word[i] !== ch) {
      return false;
    }

    board[r][c] = "*";

    // out of bounds / visited

    // dfs on 4 directions

    for (const [dR, dC] of directions) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (dfs(newRow, newCol, i + 1)) return true;
    }

    board[r][c] = ch;

    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  // CHECK TIME COMPLEXITY - O(n2) because worst case we will visit every cell on the board once for each starting cell
};
