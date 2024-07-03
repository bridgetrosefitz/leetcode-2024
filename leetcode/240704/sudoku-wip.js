/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const boardCopy = new Array(board.length);
  board.forEach((row, index) => (boardCopy[index] = [...row]));

  const rows = Array.from({ length: board.length }, () => new Set());
  const cols = Array.from({ length: board[0].length }, () => new Set());
  const blocks = Array.from({ length: 9 }, () => new Set());

  function getNextCell(i, j) {
    if (j === board[0].length - 1) {
      return [i + 1, 0];
    }

    return [i, j + 1];
  }

  function getBlock(i, j) {
    const horizontal = Math.floor(i / 3);
    const vertical = Math.floor(j / 3);

    const index = horizontal * 3 + (vertical % 3);

    return index;
  }

  function backtrack(i, j) {
    if (i === 9) {
      return true;
    }

    if (board[i][j] !== ".") {
      // add this number to 3x DS
      const [nextRow, nextCol] = getNextCell(i, j);
      return backtrack(nextRow, nextCol);
    } else {
      for (let k = 1; k <= 9; k++) {
        const isInRow = rows[i].has(k);
        const isInCol = cols[j].has(k);
        const isInBlock = blocks[getBlock(i, j)].has(k);

        if (isInRow || isInCol || isInBlock) continue;

        // console.log("board[i][j]", board[i][j])
        board[i][j] = k;
        // console.log("board[i][j]", board[i][j])
        rows[i].add(k);
        cols[j].add(k);
        blocks[getBlock(i, j)].add(k);

        const [nextRow, nextCol] = getNextCell(i, j);
        if (backtrack(nextRow, nextCol)) return true;

        board[i][j] = ".";
        rows[i].delete(k);
        cols[j].delete(k);
        blocks[getBlock(i, j)].delete(k);
      }
    }

    // return false
  }

  backtrack(0, 0);

  return board;

  // backtrack
  // if i is 9, return

  // if there is a number in there, run backtrack on next cell

  // for k 1 - 9
  // if k is in row, continue
  // if k is in col, continue
  // if k is in block, continue

  // add to row, col, block
  // place number at i,j in boardCopy

  // if col === 8, backtrack(i + 1, 0)
  // else backtrack(i, j + 1)

  // remove from row, col, block
  // make cell at i,j a "." in boardCopy

  // run backtrack on 0,0

  // return boardCopy
};
