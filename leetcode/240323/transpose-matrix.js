var transpose = function (matrix) {
  const res = [[], [], []];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      res[col][row] = matrix[row][col];
    }
  }

  return res;
};
