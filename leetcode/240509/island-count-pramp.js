function getNumberOfIslands(binaryMatrix) {
  let res = 0;

  function dfs(x, y) {
    if (isInvalidCell(x, y, binaryMatrix)) return;

    let cell = binaryMatrix[x][y];

    if (cell === 0) return;

    binaryMatrix[x][y] = 0;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        res++;
        dfs(i, j);
      }
    }
  }

  return res;
}

function isInvalidCell(x, y, matrix) {
  return x < 0 || y < 0 || x > matrix.length - 1 || y > matrix[0].length - 1;
}
