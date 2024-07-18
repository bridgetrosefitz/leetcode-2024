function nearestExit(grid, entrance) {
  const dirs = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [entrance];
  const visited = new Set();

  const [entrance, row] = entrance;
  visited.add(`${row}-${col}`);

  let steps = 0;

  while (q.length) {
    const numCells = q.length;

    for (let i = 0; i < numCells; i++) {
      const [row, col] = q.shift();

      if (
        !(row === entrance && col === entrance) &&
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

        q.push([newRow, newCol]);
        visited.add(`${newRow}-${newCol}`);
      }
    }

    steps += 1;
  }

  return -1;
}
