/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

function pacificAtlantic(heights) {
  // set for cells that can reach atlantic
  // set for cells that can reach pacific
  // set for visitedPac
  // set for visitedAt

  const canReachAt = new Set();
  const canReachPac = new Set();
  const visitedAt = new Set();
  const visitedPac = new Set();

  // we know all the cells on the edges can reach one of the oceans
  // push all those cells into respective sets

  for (let i = 0; i < heights.length; i++) {
    // add left col cells to pac
    // add right col cells to atl
    const pacId = getCellId(i, 0);
    const atlId = getCellId(i, heights[0].length - 1);
    canReachPac.add(pacId);
    canReachAt.add(atlId);
  }

  for (let i = 0; i < heights[0].length; i++) {
    // add top row cells to pac
    // add bottom row cells to atl
    const pacId = getCellId(0, i);
    const atlId = getCellId(heights.length - 1, i);
    canReachPac.add(pacId);
    canReachAt.add(atlId);
  }

  // we want to find all cells that are connected to the edge cells which are higher or equal as we go
  // iterate over every cell in respective ocean sets

  // dfs(currRowCol, prevRowCol, ocean)
  // pop next cell from stack
  // if cell value is less than prev value
  // push into set for current ocean
  // for 4 x adjacent directions
  // if not visited and isValid
  // push into stack
  // add to visited

  const pacQ = Array.from(canReachPac);
  const atlQ = Array.from(canReachAt);
  function dfs(visitedSet, q, resSet = new Set()) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let prevCellId = q[0];

    console.log(q);
    while (q.length) {
      const currCellId = q.shift();
      const [currRow, currCol] = getRowColFromCellId(currCellId);
      const [prevRow, prevCol] = getRowColFromCellId(prevCellId);

      // console.log("currCellId", currCellId)
      // console.log("currRow", currRow)
      // console.log("heights[currRow]", heights[currRow])
      if (heights[currRow][currCol] >= heights[prevRow][prevCol]) {
        const cellId = getCellId(currRow, currCol);
        resSet.add(cellId);

        for (const dir of dirs) {
          const nextRow = currRow + dir[0];
          const nextCol = currCol + dir[1];
          const nextCellId = getCellId(nextRow, nextCol);

          if (
            !visitedSet.has(nextCellId) &&
            isValidCell(nextRow, nextCol, heights)
          ) {
            visitedSet.add(nextCellId);
            q.push(nextCellId);
          }
        }

        prevCellId = cellId;
      }
    }

    return resSet;
  }

  const resSetAt = dfs(visitedAt, atlQ);
  const resSetPac = dfs(visitedPac, pacQ);

  // find overlap between sets

  const intersectingCellIds = [];

  for (const id of resSetAt) {
    if (resSetPac.has(id)) {
      intersectingCellIds.push(id);
    }
  }

  // return coordinates

  return intersectingCellIds.map(id => getRowColFromCellId(id));
}

function getCellId(row, col) {
  return `${row}-${col}`;
}

function getRowColFromCellId(id) {
  const row = id.split("-")[0];
  const col = id.split("-")[1];

  console.log("id", id);
  console.log("row", row);
  console.log("col", col);
  return [row, col];
}

function isValidCell(row, col, grid) {
  return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
}
