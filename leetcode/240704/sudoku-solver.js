/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
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

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== ".") {
        const val = board[i][j];
        rows[i].add(val);
        cols[j].add(val);
        blocks[getBlock(i, j)].add(val);
      }
    }
  }

  function backtrack(i, j) {
    if (i === 9) return true;

    if (board[i][j] !== ".") {
      const [nextRow, nextCol] = getNextCell(i, j);
      return backtrack(nextRow, nextCol);
    } else {
      for (let k = 1; k <= 9; k++) {
        const stringK = k.toString();

        const isInRow = rows[i].has(stringK);
        const isInCol = cols[j].has(stringK);
        const isInBlock = blocks[getBlock(i, j)].has(stringK);

        if (isInRow || isInCol || isInBlock) continue;

        board[i][j] = stringK;
        rows[i].add(stringK);
        cols[j].add(stringK);
        blocks[getBlock(i, j)].add(stringK);

        const [nextRow, nextCol] = getNextCell(i, j);
        if (backtrack(nextRow, nextCol)) return true;

        board[i][j] = ".";
        rows[i].delete(stringK);
        cols[j].delete(stringK);
        blocks[getBlock(i, j)].delete(stringK);
      }
    }
  }

  backtrack(0, 0);

  return board;
};
