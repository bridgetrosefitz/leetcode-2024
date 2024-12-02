/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // for each cell
  // my value is sum of min of above and left (if undefined, make. it 0)
  // return value in bottom right cell

  // [
  //     [1,3,1]
  //     [1,5,1]
  //     [4,2,1]
  // ]

  // [.        2
  //      [0,0,0,0]
  //    1 [0,1,3,0]
  //      [0,0,0,0]
  //      [0,0,0,0]
  // ]

  // [
  //     [1,3],
  //     [1,5]
  // ]

  // [

  //     [1,4],
  //     [2,0]
  // ]

  // const dp = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(0))

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (row === 0 && col === 0) {
        grid[row][col] = grid[row][col];
      } else if (row === 0) {
        grid[row][col] = grid[row][col] + grid[row][col - 1];
      } else if (col === 0) {
        grid[row][col] = grid[row][col] + grid[row - 1][col];
      } else {
        grid[row][col] =
          grid[row][col] + Math.min(grid[row - 1][col], grid[row][col - 1]);
      }
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
