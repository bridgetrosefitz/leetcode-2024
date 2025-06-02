/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];

  let colEnd = matrix[0].length - 1;
  let colBegin = 0;
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let direction = "right";

  while (res.length < matrix.length * matrix[0].length) {
    // GO ACROSS TOP
    if (direction === "right") {
      for (let col = colBegin; col <= colEnd; col++) {
        res.push(matrix[rowBegin][col]);
      }

      rowBegin++;
      direction = "down";
    } else if (direction === "down") {
      for (let row = rowBegin; row <= rowEnd; row++) {
        res.push(matrix[row][colEnd]);
      }

      colEnd--;
      direction = "left";
    } else if (direction === "left") {
      for (let col = colEnd; col >= colBegin; col--) {
        res.push(matrix[rowEnd][col]);
      }

      rowEnd--;
      direction = "up";
    } else {
      // up
      for (let row = rowEnd; row >= rowBegin; row--) {
        res.push(matrix[row][colBegin]);
      }

      colBegin++;
      direction = "right";
    }
  }

  return res;
};
