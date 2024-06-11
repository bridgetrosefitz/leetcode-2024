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
    if (isOutOfBounds(row, col, heights)) return;
    if (heights[row][col] > prevHeight) return;
    if (visited[ocean][row][col] === 1) return;
    if (visited[ocean][row][col] === 2) return true;
    visited[ocean][row][col] = 1;

    const cell = encode(row, col);
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

    if (heights[row][col] === prevHeight) {
      visited[ocean][row][col] = 0;
    }
  }

  const intersection = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (visited[pac][i][j] === 2 && visited[atl][i][j] === 2) {
        intersection.push([i, j]);
      }
    }
  }

  return intersection;
}
