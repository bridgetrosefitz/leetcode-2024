/**
 * @param {number[][]} grid
 * @return {number}
 */
var nearestExit = function (grid, entrance) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const q = [[...entrance, 0]];
  const visited = new Set();
  const [entranceRow, entranceCol] = entrance;
  visited.add(`${entranceRow}-${entranceCol}`);

  while (q.length) {
    const [row, col, steps] = q.shift();

    console.log(row, col, steps);

    if (
      !(row === entranceRow && col === entranceCol) &&
      (row === 0 ||
        col === 0 ||
        row === grid.length - 1 ||
        col === grid[0].length - 1)
    ) {
      return steps;
    }

    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= grid.length ||
        newCol >= grid[0].length
      )
        continue;
      if (grid[newRow][newCol] === "+") continue;
      if (visited.has(`${newRow}-${newCol}`)) continue;

      q.push([newRow, newCol, steps + 1]);
      visited.add(`${newRow}-${newCol}`);
    }
  }

  return -1;
};
