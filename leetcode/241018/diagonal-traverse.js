/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const res = [];
  let counter = mat.length * mat[0].length;
  console.log("counter", counter);
  let currDir = "upRight";
  const vectors = {
    upRight: [-1, 1],
    downLeft: [1, -1],
  };
  let currRow = 0;
  let currCol = 0;

  while (counter > 0) {
    console.log("hi");
    res.push(mat[currRow][currCol]);
    currRow = currRow + vectors[currDir][0];
    currCol = currCol + vectors[currDir][1];

    // Top right corner
    if (currRow < 0 && currCol === mat.length) {
      currRow += 2;
      currCol -= 1;
      currDir = "downLeft";
      counter--;
      continue;
    }
    // Bottom left corner
    if (currRow === mat.length && currCol < 0) {
      currRow -= 1;
      currCol += 2;
      currDir = "upRight";
      counter--;
      continue;
    }
    // top of grid
    if (currRow < 0) {
      currRow += 1;
      currDir = "downLeft";
    }
    // left of grid
    if (currCol < 0) {
      currCol += 1;
      currDir = "upRight";
    }
    // bottom of grid
    if (currRow === mat.length) {
      currRow -= 1;
      currCol += 2;
      currDir = "upRight";
    }
    // right of grid
    if (currCol > mat[0].length) {
      currRow += 2;
      currCol -= 1;
      currDir = "downLeft";
    }

    counter--;
  }
  // while there are still squares to visit (decrement from rows len x cols len)
  // set currDirection to upRight
  // go in currDirection until you go out of bounds
  // if currDir is upRight, add [-1, 1] to cell
  // if currDir is downLeft, add [1, -1] to cell
  // decrement counter
  // turn corner --- FIGURE OUT
  // while out of bounds
  // WHEN GOING UP RIGHT
  // try to go down one
  // try to down two and left one
  // WHEN GOING DOWN LEFT
  // try to go right one
  // try to go right two and up one
  // toggle currDirection

  return res;
};
