/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const makeKey = (r, c) => `${r}-${c}`;
const parseKey = key => {
  const [rowStr, colStr] = key.split("-");
  return [Number(rowStr), Number(colStr)];
};
var pacificAtlantic = function (heights) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const ROWS = heights.length;
  const COLS = heights[0].length;

  const canFlow = {
    pac: new Set(),
    atl: new Set(),
  };

  // populate cells we know can reach

  for (let row = 0; row < ROWS; row++) {
    // pac cells at col 0
    // atl cells at last col

    canFlow["pac"].add(makeKey(row, 0));
    canFlow["atl"].add(makeKey(row, COLS - 1));
  }

  for (let col = 0; col < COLS; col++) {
    // pac cells at row 0
    // atl cells at last row
    canFlow["pac"].add(makeKey(0, col));
    canFlow["atl"].add(makeKey(ROWS - 1, col));
  }

  function dfs(r, c, ocean) {
    canFlow[ocean].add(makeKey(r, c));
    // visit 4 neighbors if
    // in bounds
    // height is valid
    // have not already visited

    for (const [dR, dC] of dirs) {
      const newRow = dR + r;
      const newCol = dC + c;

      if (newRow >= ROWS || newCol >= COLS || newRow < 0 || newCol < 0) {
        continue;
      }

      if (heights[r][c] > heights[newRow][newCol]) {
        continue;
      }

      if (canFlow[ocean].has(makeKey(newRow, newCol))) {
        continue;
      }

      dfs(newRow, newCol, ocean);
    }
  }

  // for each of those cells, dfs to every other cell which can reach

  for (const key of canFlow["pac"]) {
    const [row, col] = parseKey(key);
    dfs(row, col, "pac");
  }

  for (const key of canFlow["atl"]) {
    const [row, col] = parseKey(key);
    dfs(row, col, "atl");
  }

  // grab the intersection

  const intersection = [];

  for (const key of canFlow["pac"]) {
    if (canFlow["atl"].has(key)) {
      intersection.push(key);
    }
  }

  return intersection.map(key => parseKey(key));
};
