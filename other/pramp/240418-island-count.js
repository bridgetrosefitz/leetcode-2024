function getNumberOfIslands(binaryMatrix) {
  let res = 0;

  function helper(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x > binaryMatrix.length - 1 ||
      y > binaryMatrix[0].length - 1
    ) {
      return;
    }

    let cell = binaryMatrix[x][y];

    if (cell === 0) {
      return;
    }

    binaryMatrix[x][y] = 0;

    helper(x + 1, y);
    helper(x - 1, y);
    helper(x, y + 1);
    helper(x, y - 1);
  }

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        res++;
        helper(i, j);
      }
    }
  }
  return res;
}
