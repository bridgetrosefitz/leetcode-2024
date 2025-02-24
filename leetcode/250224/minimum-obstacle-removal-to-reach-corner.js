/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const deque = []; // 0-1 BFS queue
  deque.push([0, 0, 0]); // [row, col, bombsUsed]

  const visited = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  );
  visited[0][0] = 0; // Start cell, 0 bombs used

  while (deque.length) {
    const [r, c, bombsUsed] = deque.shift(); // BFS: remove from front

    if (r === rows - 1 && c === cols - 1) return bombsUsed; // Found exit

    for (const [dr, dc] of directions) {
      const nr = r + dr,
        nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue; // Out of bounds

      const newBombsUsed = bombsUsed + grid[nr][nc];

      if (newBombsUsed < visited[nr][nc]) {
        // If we found a better path
        visited[nr][nc] = newBombsUsed;
        if (grid[nr][nc] === 0) {
          deque.unshift([nr, nc, newBombsUsed]); // No obstacle → explore first
        } else {
          deque.push([nr, nc, newBombsUsed]); // Obstacle → explore later
        }
      }
    }
  }

  return -1; // Should never reach here
};
