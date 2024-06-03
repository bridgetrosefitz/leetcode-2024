/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const encode = (row, col) => `${row}-${col}`;
const decode = id => [parseInt(id.split("-")[0]), parseInt(id.split("-")[1])];
const isOutOfBounds = (row, col, grid) =>
  row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;

function pacificAtlantic(heights) {
  const pac = "pacific";
  const atl = "atlantic";
  // make list of all cells that touch atlantic
  // same for pacific

  const startingCells = {
    [atl]: new Set(),
    [pac]: new Set(),
  };

  const startingCellsPac = new Set();
  const startingCellsAt = new Set();
  for (let i = 0; i < heights[0].length; i++) {
    const pacCell = encode(0, i);
    const atCell = encode(heights.length - 1, i);
    startingCells[pac].add(pacCell);
    startingCells[atl].add(atCell);
  }

  for (let i = 0; i < heights.length; i++) {
    const pacCell = encode(i, 0);
    const atCell = encode(i, heights[0].length - 1);
    startingCellsPac.add(pacCell);
    startingCellsAt.add(atCell);
  }

  // make a list of all cells that are "reachable" from atlantic
  // bfs
  // add to relevant reachable set
  // add to relevant visited set
  // all four directions
  // add to queue if
  // height is larger than curr
  // not already in relevant set

  // same for pacific

  const reachable = {
    [atl]: new Set(),
    [pac]: new Set(),
  };

  function bfs(ocean) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const q = [];

    const startingSet = startingCells[ocean];
    const visitedSet = new Set();
    const reachableSet = reachable[ocean];

    // do bfs for every cell in starting set
    for (const startingCell of startingSet.values()) {
      const [row, col] = decode(startingCell);
      q.push([row, col]);

      while (q.length) {
        const [row, col] = q.shift();
        const encodedCell = encode(row, col);
        reachableSet.add(encodedCell);
        visitedSet.add(encodedCell);

        for (const [dR, dC] of dirs) {
          const newRow = row + dR;
          const newCol = col + dC;

          const encodedCell = encode(newRow, newCol);
          if (isOutOfBounds(newRow, newCol, heights)) continue;
          if (visitedSet.has(encodedCell)) continue;
          if (heights[newRow][newCol] < heights[row][col]) continue;
          q.push([newRow, newCol]);
        }
      }
    }
  }

  bfs(pac);
  bfs(atl);

  // find intersection

  const intersection = [];

  for (reachableCell of reachable[pac].values()) {
    if (reachable[atl].has(reachableCell)) {
      const decodedCell = decode(reachableCell);
      intersection.push(decodedCell);
    }
  }

  return intersection;
}
