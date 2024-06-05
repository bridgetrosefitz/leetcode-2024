/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const isOutOfBounds = (row, col, grid) =>
  row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
const encode = (row, col) => `${row}-${col}`;
const decode = cell => [
  parseInt(cell.split("-")[0]),
  parseInt(cell.split("-")[1]),
];

function pacificAtlantic(heights) {
  // make a canReach set of all pac cells
  // same for atl

  const canReachPac = new Set();
  const canReachAtl = new Set();

  const pac = "pac";
  const atl = "atl";

  const canReach = {
    pac: canReachPac,
    atl: canReachAtl,
  };

  function dfs(row, col, ocean, prevHeight) {
    if (isOutOfBounds(row, col, heights)) return;
    const cell = encode(row, col);
    if (canReach[ocean].has(cell)) return;
    if (heights[row][col] < prevHeight) return;

    canReach[ocean].add(cell);

    dfs(row + 1, col, ocean, heights[row][col]);
    dfs(row - 1, col, ocean, heights[row][col]);
    dfs(row, col + 1, ocean, heights[row][col]);
    dfs(row, col - 1, ocean, heights[row][col]);
  }

  for (let i = 0; i < heights.length; i++) {
    dfs(i, 0, pac, -1);
    dfs(i, heights[0].length - 1, atl, -1);
    // const pacCell = encode(i, 0)
    // const atlCell = encode(i, heights.length - 1)
    // canReachPac.add(pacCell)
    // canReachAtl.add(atlCell)
  }

  for (let i = 0; i < heights[0].length; i++) {
    dfs(0, i, pac, -1);
    dfs(heights.length - 1, i, atl, -1);
    // const pacCell = encode(0, i)
    // const atlCell = encode(heights.length - 1, i)
    // canReachPac.add(pacCell)
    // canReachAtl.add(atlCell)
  }

  const intersection = [];

  for (const cell of canReachPac) {
    if (canReachAtl.has(cell)) {
      const rowCol = decode(cell);
      intersection.push(rowCol);
    }
  }

  return intersection;

  // dfs(row, col, ocean)
  // add to canReach set

  // for 4x neighbors
  // if out of bounds, continue
  // if in canReach, continue
  // if height is lower than current height, continue

  // use dfs on all pac cells >> hardcode the for-loop on numbers instead of heights
  // same for atl

  // once you have something basic, just go ahead. You'll be able to make the necessary adjustments

  // TWO APPROACHES
  // see the ones already touching the ocean -> which cells flow down
  // look at the cells, and see if they can flow down to both oceans

  // EXAMPLES (interesting ones)
  // basic cell
  // ocean cell vs non ocean cell
  // what would make the approach I said not work

  // THINK OF A BIG PICTURE SCHEMATIC OF HOW THE LOGIC SHOULD WORK

  // once I'm satisfied, just stop doing the example (15s is ok)
  // time complexity of matrix graph traversal
  // how many times will i process each cell - at most I'll visit every cell twice; run an if statement 4x

  // every node we visit can flow into an ocean (because we will test if the height is appropriate BEFORE we go there)
  // you don't go to the node if you can't go there, so it won't be in visited, so you'll always test again
  // when you visit, it means you can ACTUALLY GET THERE

  //iterate over whole board, keep track of visited
  // now I'm going to take each cell and say can you flow to pacific / atlantic >> will be more complicated Going to have to remember that you reached one

  // if something isn't making sense to me, immediately do a small example. it's very hard to think abstractly
  // the spec did not have this issue. Ev that can flow left can flow north
}
