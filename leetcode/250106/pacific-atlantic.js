/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const canReach = {
    pac: new Set(),
    atl: new Set(),
  };

  for (let row = 0; row < heights.length; row++) {
    findAdjCells(row, 0, -1, "pac");
    findAdjCells(row, heights[0].length - 1, -1, "atl");
  }

  for (let col = 0; col < heights[0].length; col++) {
    findAdjCells(0, col, -1, "pac");
    findAdjCells(heights.length - 1, col, -1, "atl");
  }

  function findAdjCells(r, c, prevHeight, ocean) {
    if (r < 0 || c < 0 || r === heights.length || c === heights[0].length) {
      return;
    }

    if (canReach[ocean].has(`${r}-${c}`)) {
      return;
    }

    if (heights[r][c] < prevHeight) {
      return;
    }

    canReach[ocean].add(`${r}-${c}`);

    findAdjCells(r + 1, c, heights[r][c], ocean);
    findAdjCells(r - 1, c, heights[r][c], ocean);
    findAdjCells(r, c + 1, heights[r][c], ocean);
    findAdjCells(r, c - 1, heights[r][c], ocean);
  }

  const intersection = [];

  for (const pacCell of canReach["pac"]) {
    if (canReach["atl"].has(pacCell)) {
      const [rowStr, colStr] = pacCell.split("-");
      const row = parseInt(rowStr);
      const col = parseInt(colStr);
      intersection.push([row, col]);
    }
  }
  return intersection;
};
