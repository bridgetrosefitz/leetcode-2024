/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  // [-1,-1,0]
  const originalRows = box.length;
  const originalCols = box[0].length;
  const currRowVals = new Array(box.length).fill(-1);
  // nested loop - forward across rows; backwards across cols
  // move everything as far right as possible
  // if empty
  // if there is a value in row slot, do nothing
  // if -1, make slot equal curr index
  // if obstacle, make -1
  // if stone
  // if -1, continue
  // make index in slot store a stone
  // make curr index empty
  // decrement number in slot

  //make a new matrix of originalCols length and originalRows inner length
  // iterate across box, top to bottom, left to right
  // get newRow (j)
  // get newCol (originalRows - 1 - i)
  // assign value in newBox at newRow newCol to thing at i-j

  for (let i = 0; i < originalRows; i++) {
    for (let j = originalCols - 1; j >= 0; j--) {
      const el = box[i][j];
      if (el === ".") {
        if (currRowVals[i] > 0) continue;
        if (currRowVals[i] === -1) {
          currRowVals[i] = j;
        }
      } else if (el === "*") {
        currRowVals[i] = -1;
      } else {
        if (currRowVals[i] === -1) continue;
        const col = currRowVals[i];
        box[i][col] = "#";
        box[i][j] = ".";
        currRowVals[i]--;
      }
    }
  }

  const newBox = Array.from(
    { length: originalCols },
    () => new Array(originalRows)
  );

  for (let i = 0; i < originalRows; i++) {
    for (let j = 0; j < originalCols; j++) {
      const newRow = j;
      const newCol = originalRows - 1 - i;
      newBox[newRow][newCol] = box[i][j];
    }
  }

  return newBox;

  // rotate
  // 1. ith row (original) becomes number of rows in original - i - 1
  // 2. jth col (original) becomes jth row

  // COULD WE DO THIS RECURSIVELY
};
