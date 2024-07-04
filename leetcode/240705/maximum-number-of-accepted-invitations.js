/**
 * @param {number[][]} grid
 * @return {number}
 */

var maximumInvitations = function (grid) {
  let girls = new Array(grid[0].length).fill(false);
  let boys = new Array(grid.length).fill(false);
  let max = 0;
  let curr = 0;

  function getNextCell(i, j) {
    let newRow = i;
    let newCol = j;
    if (j === grid[0].length - 1) {
      newRow += 1;
      newCol = 0;
    } else {
      newCol += 1;
    }

    return [newRow, newCol];
  }

  function canSendInvitation(i, j) {
    if (grid[i][j] !== 1) return false;
    if (boys[i]) return false;
    if (girls[j]) return false;
    // - there must be a 1 in the same cell in original
    // - there must not be a 1 already in the same row or col in gridCopy
  }

  function backtrack(i, j) {
    if (i === grid.length) {
      max = Math.max(max, curr);
      return;
    }

    const [nextRow, nextCol] = getNextCell(i, j);

    if (canSendInvitation(i, j)) {
      boys[i] = true;
      girls[j] = true;
      curr += 1;
      backtrack(nextRow, nextCol);
      curr -= 1;
      boys[i] = false;
      girls[j] = false;
    }

    backtrack(nextRow, nextCol);
  }

  backtrack(0, 0);

  return max;
};
