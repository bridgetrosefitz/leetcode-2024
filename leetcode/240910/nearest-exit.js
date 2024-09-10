function nearestExit(grid, entrance) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const q = [entrance];
  const visited = new Set();
  const [entranceRow, entranceCol] = entrance;
  visited.add(`${entranceRow}-${entranceCol}`);

  let steps = 0;

  while (q.length) {
    const numCells = q.length;

    for (let i = 0; i < numCells; i++) {
      const [row, col] = q.shift();

      if (
        !(row === entranceRow && col === entranceCol) &&
        (row === 0 ||
          col === 0 ||
          row === grid.length ||
          col === grid[0].length - 1)
      )
        return steps;

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

        q.push([newRow, newCol]);
        visited.add(`${newRow}-${newCol}`);
      }
    }

    steps += 1;
  }

  return -1;
}
