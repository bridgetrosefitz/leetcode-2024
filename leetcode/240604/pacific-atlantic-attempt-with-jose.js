const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
// explore from top-left, iterating over each cell in matrix
// explore neighbors for each case
// call dfs for each cell; the algo will tell us whether the ocean is reachable
// define north / south / east / west - neighbors / directions relative to current cell
// for some cells it will be invalid (not in the matrix)

// create a matrix of 0s and 1s to say if an ocean is reachable from a given cell

const pacificMatrix = Array.from({ length: heights.length }, () =>
  new Array(heights[0].length).fill(0)
);
const atlanticMatrix = Array.from({ length: heights.length }, () =>
  new Array(heights[0].length).fill(0)
);

function dfs(row, col) {
  for (const [dR, dC] of dirs) {
    const newRow = row + dR;
    const newCol = col + dC;
    if (
      isValid(newRow, newCol) &&
      heights[newRow][newCol] < heights[row][col]
    ) {
      dfs(row, Col);
    }
  }
}

function isValid(row, col) {
  return (
    row >= 0 && col >= 0 && row < heights.length && col < heights[0].length
  );
}
