/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  // push items as far right as possible
  for (let row = 0; row < box.length; row++) {
    let right = box.length - 1;

    for (let left = box[0].length - 1; left >= 0; left--) {
      const leftItem = box[row][left];

      // if left is a star, move right to left
      if (leftItem === "*") left = right;

      // optimise right
      // find the first item that is a '.'
      if (leftItem === "#") {
        let rightItem = box[row][right];
        while (rightItem !== "." && left <= right && right >= 0) {
          right--;
        }

        // put the rock there
        if (rightItem === ".") {
          box[row][right] = "#";
          box[row][left] = ".";
        }
      }
    }
  }

  // create new box
  // rotate the box

  // row 0 becomes max col
  // row 1 becomes second max col
  // row 2 becomes third max col
  // etc
  // row max, becomes col 0

  // col 0, becomes row 0
  // col 1, becomes row 1
  // etc
};
