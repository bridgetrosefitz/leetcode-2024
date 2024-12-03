/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // remainingFresh count
  // steps count
  // load in all rotten cells to queue
  // while f > 0 && queue length
  // increment steps with bfs for every layer from first rottens
  // if fresh > 0, return -1

  let remainingFresh = 0;
  const q = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        q.push([row, col]);
      }
      if (grid[row][col] === 1) {
        remainingFresh += 1;
      }
    }
  }

  let stepsCount = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (remainingFresh > 0 && q.length) {
    const qLength = q.length;

    for (let i = 0; i < qLength; i++) {
      const [row, col] = q.shift();

      for (const [dR, dC] of dirs) {
        const newRow = row + dR;
        const newCol = col + dC;

        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow >= grid.length ||
          newCol >= grid[0].length
        ) {
          continue;
        }

        if (grid[newRow][newCol] === 0 || grid[newRow][newCol] === 2) {
          continue;
        }

        q.push([newRow, newCol]);
        grid[newRow][newCol] = 2;
        remainingFresh -= 1;
      }
    }

    stepsCount += 1;
  }

  return remainingFresh > 0 ? -1 : stepsCount;
};
