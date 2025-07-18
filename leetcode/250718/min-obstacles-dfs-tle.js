/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  let min = Infinity;
  const minBombsByCell = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(Infinity)
  );
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function explore(r, c, bombsInclCurr) {
    // update min at cell
    // update overall min

    minBombsByCell[r][c] = Math.min(minBombsByCell[r][c], bombsInclCurr);
    min = Math.min(min, minBombsByCell[r][c]);

    for (const [dR, dC] of dirs) {
      const newRow = r + dR;
      const newCol = c + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= grid.length ||
        newCol >= grid[0].length
      ) {
        continue;
      }

      const bombsForNextCell = bombsInclCurr + Number(grid[newRow][newCol]);
      if (minBombsByCell[newRow][newCol] < bombsForNextCell) {
        continue;
      }

      explore(newRow, newCol, bombsForNextCell);
    }
  }

  explore(0, 0, Number(grid[0][0]));

  return min;
};
