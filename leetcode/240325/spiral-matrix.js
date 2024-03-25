var spiralOrder = function (matrix) {
  // increment col and add matrix[row][col] until max col
  // increment min row
  // increment row and add matrix[row][col] until max row
  // decrement max col
  // decrement col and add matrix[row][col] until min col
  // decrement max row
  // decrement row and add matrix[row][col] until min row
  // increment min col

  const res = [];

  const rows = matrix.length;
  const columns = matrix[0].length;
  let top = 0;
  let left = 0;
  let right = columns - 1;
  let bottom = rows - 1;

  while (res.length < rows * columns) {
    // traverse from left to right
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }

    // traverse downwards
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }

    // make sure we are on a different row
    if (top !== bottom) {
      // traverse from right to left
      for (let col = right - 1; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
    }

    // make sure we are on a different col
    if (left !== right) {
      for (let row = bottom - 1; row > top; row--) {
        res.push(matrix[row][left]);
      }
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  return res;
};
