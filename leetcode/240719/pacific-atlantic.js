function pacificAtlantic(heights) {
  const pac = "pac";
  const atl = "atl";

  const canReach = {
    pac: new Set(),
    atl: new Set(),
  };

  function dfs(row, col, prevHeight, ocean) {
    if (row < 0 || col < 0 || row >= heights.length || col >= heights[0].length)
      return;
    if (canReach[ocean].has(`${row}-${col}`)) return;
    if (heights[row][col] < prevHeight) return;
    canReach[ocean].add(`${row}-${col}`);

    dfs(row + 1, col, heights[row][col], ocean);
    dfs(row - 1, col, heights[row][col], ocean);
    dfs(row, col + 1, heights[row][col], ocean);
    dfs(row, col - 1, heights[row][col], ocean);
  }

  for (let i = 0; i < heights.length; i++) {
    dfs(i, 0, -1, pac);
    dfs(i, heights[0].length - 1, -1, atl);
  }

  for (let i = 0; i < heights[0].length; i++) {
    dfs(0, i, -1, pac);
    dfs(heights.length - 1, i, -1, atl);
  }

  const intersection = [];

  for (const pacReach of canReach[pac]) {
    if (canReach[atl].has(pacReach)) {
      const [row, col] = pacReach.split("-");
      intersection.push([parseInt(row), parseInt(col)]);
    }
  }

  return intersection;
}
