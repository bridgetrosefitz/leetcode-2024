/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  let topMostVisited = -1;
  let rightMostVisited = matrix[0].length;
  let bottomMostVisited = matrix.length;
  let leftMostVisited = -1;

  const res = [];
  let row = -1;
  let col = -1;

  while (
    topMostVisited < bottomMostVisited &&
    leftMostVisited < rightMostVisited
  ) {
    // ACROSS RIGHT
    row++;
    col++;
    for (; col < rightMostVisited; col++) {
      res.push(matrix[row][col]);
    }

    topMostVisited++;
    if (res.length === matrix.length * matrix[0].length) {
      break;
    }

    // DOWN RIGHT
    row++;
    col--;
    for (; row < bottomMostVisited; row++) {
      res.push(matrix[row][col]);
    }

    rightMostVisited--;
    if (res.length === matrix.length * matrix[0].length) {
      break;
    }

    // ACROSS LEFT
    col--;
    row--;
    for (; col > leftMostVisited; col--) {
      res.push(matrix[row][col]);
    }

    bottomMostVisited--;
    if (res.length === matrix.length * matrix[0].length) {
      break;
    }

    // UP LEFT
    row--;
    col++;
    for (; row > topMostVisited; row--) {
      res.push(matrix[row][col]);
    }

    leftMostVisited++;
    if (res.length === matrix.length * matrix[0].length) {
      break;
    }
  }

  /*
    
        1 2  3  4
        5 6  7  8
        9 10 11 12
    */
  return res;
};
