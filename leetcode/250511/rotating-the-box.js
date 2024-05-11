/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  // push items as far right as possible
  for (let row = 0; row < box.length; row++) {
    let left = 0;

    for (let right = 0; right < box[0].length; right++) {
      const item = box[row][left];
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
