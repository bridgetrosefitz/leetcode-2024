/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const getKey = (r, c) => `${r}-${c}`;
const parseKey = key => {
  const strs = key.split("-");
  const row = strs[0];
  const col = strs[1];
  return [parseInt(row), parseInt(col)];
};

var pacificAtlantic = function (heights) {
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

  for (let col = 0; col < heights[0].length; col++) {
    canReach.pac.add(getKey(0, col)); // Pacific at the top
    canReach.atl.add(getKey(heights.length - 1, col)); // Atlantic at the bottom
  }

  for (let row = 0; row < heights.length; row++) {
    canReach.pac.add(getKey(row, 0)); // Pacific at the left
    canReach.atl.add(getKey(row, heights[0].length - 1)); // Atlantic at the right
  }

  function traverse(r, c, ocean) {
    canReach[ocean].add(getKey(r, c));

    for (const [dR, dC] of dirs) {
      const newRow = dR + r;
      const newCol = dC + c;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= heights.length ||
        newCol >= heights[0].length
      ) {
        continue;
      }

      if (canReach[ocean].has(getKey(newRow, newCol))) {
        continue;
      }

      if (heights[newRow][newCol] < heights[r][c]) {
        continue;
      }

      traverse(newRow, newCol, ocean);
    }
  }

  for (const stringRowCol of canReach.pac) {
    const [row, col] = parseKey(stringRowCol);
    traverse(row, col, "pac");
  }

  for (const stringRowCol of canReach.atl) {
    const [row, col] = parseKey(stringRowCol);
    traverse(row, col, "atl");
  }

  const intersection = [];

  for (const atlCoord of canReach.atl) {
    if (canReach.pac.has(atlCoord)) {
      intersection.push(atlCoord);
    }
  }

  return intersection.map(stringCoord => parseKey(stringCoord));
};
