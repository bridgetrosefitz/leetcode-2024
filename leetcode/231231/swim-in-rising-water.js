/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  /*
 
 [
    [0,2],
    [1,3]
]

[
    [10,12,4, 6],
    [9, 11,3, 5],
    [1, 7, 13,8],
    [2, 0, 15,14]
]


Just because you are at a new cell, it doesn' t mean you should get rid of your old options
 */

  let minTime = 0;
  let currOptions = [[0, 0]];
  let visited = new Set();
  const vectors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (currOptions.length) {
    // if at bottom right cell, return minTime

    // pick lowest next option
    const minOption = currOptions.reduce((acc, curr) => {
      const [row, col] = curr;
      const height = grid[row][col];
      const [currLowestRow, currLowestCol] = acc;
      const currLowestHeight = grid[currLowestRow][currLowestCol];
      if (height < currLowestHeight) {
        return curr;
      }
      return acc;
    }, currOptions[0]);

    //  q up its neighbors

    const minOptionRow = minOption[0];
    const minOptionCol = minOption[1];
    console.log(minOption, grid[minOptionRow][minOptionCol]);
    visited.add(`${minOptionRow}-${minOptionCol}`);

    minTime = Math.max(minTime, grid[minOptionRow][minOptionCol]);

    if (
      minOptionRow === grid.length - 1 &&
      minOptionCol === grid[0].length - 1
    ) {
      return minTime;
    }

    const nextOptions = [];

    for (const [dR, dC] of vectors) {
      const newRow = minOptionRow + dR;
      const newCol = minOptionCol + dC;

      if (visited.has(`${newRow}-${newCol}`)) continue;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === grid.length ||
        newCol === grid[0].length
      )
        continue;
      nextOptions.push([newRow, newCol]);
    }

    currOptions = nextOptions;
  }
};
