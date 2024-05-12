function getIslandCount(M) {
  let ROW = M.length;
  let COL = M[0].length;

  function isSafe(M, row, col, visited) {
    return (
      row >= 0 &&
      row < ROW &&
      col >= 0 &&
      col < COL &&
      M[row][col] === 1 &&
      !visited[row][col]
    );
  }

  function dfs(M, row, col, visited) {
    let rowNeighbors = [-1, 0, 0, 1];
    let colNeighbors = [0, -1, 1, 0];

    visited[row][col] = true;

    for (let k = 0; k < 5; k++) {
      ////FINISH https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/
    }
  }
}
