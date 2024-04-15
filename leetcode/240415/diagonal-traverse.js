/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  const res = [];

  let currentRow = 0;
  let currentCol = 0;
  let goingUp = true;

  while (res.length !== rows * cols) {
    if (goingUp) {
      while (currentRow >= 0 && currentCol < cols) {
        res.push(mat[currentRow][currentCol]);

        currentRow--;
        currentCol++;
      }

      if (currentCol === cols) {
        currentCol--;
        currentRow += 2;
      } else {
        currentRow++;
      }

      goingUp = false;
    } else {
      while (currentRow < rows && currentCol >= 0) {
        res.push(mat[currentRow][currentCol]);

        currentCol--;
        currentRow++;
      }

      if (currentRow === rows) {
        currentCol += 2;
        currentRow--;
      } else {
        currentCol++;
      }

      goingUp = true;
    }
  }

  return res;
};
