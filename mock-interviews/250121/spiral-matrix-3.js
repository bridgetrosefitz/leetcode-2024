/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  if (matrix.length === 0) {
    return res;
  }

  let rowBegin = 0; // topmost row
  let rowEnd = matrix.length - 1; // bottommost row
  let colBegin = 0; // leftmost col
  let colEnd = matrix[0].length - 1; // rightmost col

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // why is this <=
    // GO RIGHT
    for (let col = colBegin; col <= colEnd; col++) {
      res.push(matrix[rowBegin][col]);
    }
    rowBegin++;

    // GO DOWN
    for (let row = rowBegin; row <= rowEnd; row++) {
      res.push(matrix[row][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // what happens if you don't check this
      // GO LEFT
      for (let col = colEnd; col >= colBegin; col--) {
        res.push(matrix[rowEnd][col]);
      }
      rowEnd--;
    }

    if (colBegin <= colEnd) {
      // GO UP
      for (let row = rowEnd; row >= rowBegin; row--) {
        res.push(matrix[row][colBegin]);
      }
    }

    colBegin++;
  }

  return res;
};
