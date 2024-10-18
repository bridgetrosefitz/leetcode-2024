var findDiagonalOrder = function (mat) {
  const upRightVector = [-1, 1];
  const downLeftVector = [1, -1];
  const rightVector = [0, 1];
  const downVector = [1, 0];
  let currDir = "upRight";
  const res = [];
  let count = mat.length * mat[0].length;

  function helper(row, col, dir) {
    // if count is 0, return // TO DO CHECK IF WE RETURN AT 0 or -1
    // if out of bounds, return
    // push val into res
    // decrement count
    // queue up next calls
    // make newRow and newCol acc to dir
    // if dir is upRight
    // make newRow and newCol with right vector
    // make newRow and newCol with dow
  }

  helper(0, 0);
  return res;

  //=======================

  // while out of bounds
  // try to go right
  // try to go left
};
