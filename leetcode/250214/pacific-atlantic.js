/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  /*
    
    Inputs:
    -- type, length, hostile
    - int[][] (height at that cell)
    - length at least one
    Outputs:
    -- type, length, mutate

    */

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const canReach = {
    pac: new Set(),
    atl: new Set(),
  };

  // populate initial canReach

  for (let i = 0; i < heights[0].length; i++) {
    canReach.pac.add(`${0}-${i}`);
    canReach.atl.add(`${heights.length - 1}-${i}`);
  }

  for (let i = 0; i < heights.length; i++) {
    canReach.pac.add(`${i}-${0}`);
    canReach.atl.add(`${i}-${heights[0].length - 1}`);
  }

  // traverse from initial canReach

  // 1 1
  // 1 1
  // 1 1

  // canReachPac = {0-0, 0-1, 1-0, 2-0} canReachAtl = {2-0,2-1,0-1,1-1}
  function traverse(r, c, ocean) {
    canReach[ocean].add(`${r}-${c}`);

    for (const [dR, dC] of dirs) {
      const newRow = dR + r;
      const newCol = dC + c;

      // out of bounds
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === heights.length ||
        newCol === heights[0].length
      ) {
        continue;
      }

      // in set already

      if (canReach[ocean].has(`${newRow}-${newCol}`)) {
        continue;
      }

      // height is lower

      if (heights[newRow][newCol] < heights[r][c]) {
        continue;
      }

      traverse(newRow, newCol, ocean);
    }
  }

  for (const stringRowCol of canReach.pac) {
    const [stringRow, stringCol] = stringRowCol.split("-");
    const row = parseInt(stringRow);
    const col = parseInt(stringCol);
    traverse(row, col, "pac");
  }

  for (const stringRowCol of canReach.atl) {
    const [stringRow, stringCol] = stringRowCol.split("-");
    const row = parseInt(stringRow);
    const col = parseInt(stringCol);
    traverse(row, col, "atl");
  }

  // create intersection

  const intersection = [];

  for (const atlCoord of canReach.atl) {
    if (canReach.pac.has(atlCoord)) {
      intersection.push(atlCoord);
    }
  }

  return intersection.map(stringCoord => {
    const [stringRow, stringCol] = stringCoord.split("-");

    const row = Number(stringRow);
    const col = Number(stringCol);

    return [row, col];
  });
};
