function checkEqualityOfRoads(matrix) {
  // make in-deg array of size mat[0].length
  // make out-deg array of size mat[0].length
  // for each row,
  // at j, increment inDeg[j] if true
  // at i, increment outDeg[i] if true

  // make isEquitable = true
  // for every element in in-deg, if in-deg[i] !== out-deg[i] return false

  const outDeg = new Array(matrix.length).fill(0);
  const inDeg = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        inDeg[j]++;
        outDeg[i]++;
      }
    }
  }

  for (let i = 0; i < outDeg.length; i++) {
    if (outDeg[i] !== inDeg[i]) return false;
  }

  return true;
}
