/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const encode = (row, col) => `${row}-${col}`;
const decode = cell => [
  parseInt(cell.split("-")[0]),
  parseInt(cell.split("-")[1]),
];

const isOutOfBounds = (row, col, grid) =>
  row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;

function pacificAtlantic(heights) {
  const pac = "pac";
  const atl = "atl";

  const isAtPac = (row, col) => col === 0 || row === 0;
  const isAtAtl = (row, col) =>
    col === heights[0].length - 1 || row === heights.length - 1;

  const isAtOcean = {
    pac: isAtPac,
    atl: isAtAtl,
  };

  const visited = {
    pac: Array.from({ length: heights.length }, () =>
      new Array(heights[0].length).fill(0)
    ),
    atl: Array.from({ length: heights.length }, () =>
      new Array(heights[0].length).fill(0)
    ),
  };

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      dfs(i, j, pac, Infinity);
      dfs(i, j, atl, Infinity);
    }
  }

  function dfs(row, col, ocean, prevHeight) {
    if (isOutOfBounds(row, col, heights)) return false;
    if (heights[row][col] > prevHeight) return false;
    if (visited[ocean][row][col] === 2) return true;
    if (visited[ocean][row][col] === 1) return false;
    visited[ocean][row][col] = 1;

    if (isAtOcean[ocean](row, col)) {
      visited[ocean][row][col] = 2;
      return true;
    }

    const south = dfs(row + 1, col, ocean, heights[row][col]);
    const north = dfs(row - 1, col, ocean, heights[row][col]);
    const east = dfs(row, col + 1, ocean, heights[row][col]);
    const west = dfs(row, col - 1, ocean, heights[row][col]);

    if (south || north || east || west) {
      visited[ocean][row][col] = 2;
      return true;
    }

    // if(dfs(row + 1, col, ocean, heights[row][col])) {
    //     visited[ocean][row][col] = 2
    //     return true // do we have to return TRUE here
    // }
    // if(dfs(row - 1, col, ocean, heights[row][col])) {
    //     visited[ocean][row][col] = 2
    //     return true
    // }
    // if(dfs(row, col + 1, ocean, heights[row][col])) {
    //     visited[ocean][row][col] = 2
    //     return true
    // }
    // if(dfs(row, col - 1, ocean, heights[row][col])) {
    //     visited[ocean][row][col] = 2
    //     return true
    // }

    // return false
  }

  const intersection = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (visited[pac][i][j] === 2 && visited[atl][i][j] === 2) {
        intersection.push([i, j]);
      }
    }
  }

  console.log("visited atl", visited[atl]);
  console.log("visited pac", visited[pac]);
  return intersection;
}

// iterate over every cell
// perform dfs from every cell, looking for if we are at edges
// if cell is out of bounds, return false
// if height is higher than prevHeight, return false
// if curr cell is in visited for relevant ocean, return true
// if is at the relevant ocean,
// add current cell to relevant canReach set
// return true
// call dfs on four neighbors and if result from child call is true, add current cell to canReach set

// iterate over whole board, keep track of visited
// now I'm going to take each cell and say can you flow to pacific / atlantic >> will be more complicated Going to have to remember that you reached one
