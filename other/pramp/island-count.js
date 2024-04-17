function getNumberOfIslands(binaryMatrix) {
  const activeColumns = new Array(binaryMatrix[0].length).fill(false);
  let isRowActive = false;
  let islandCount = 0;

  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++) {
      const el = binaryMatrix[row][col];
      // CASE WHERE EL IS 1
      if (el === 1) {
        if (!activeColumns[col] && !isRowActive) {
          islandCount++;
        }
        activeColumns[col] = true;
        if (col !== binaryMatrix[0] - 1) isRowActive = true;
      } else {
        // CASE WHERE EL IS 0
        activeColumns[col] = false;
        isRowActive = false;
      }
    }
  }

  return islandCount;

  // loop over every row
  // if element is a 1
  // if its corresponding column is active OR its corresponding row is active
  // do nothing
  // else
  // increment islandCount
  // set activeColumns[j] to true
  // set isRowActive to true
  // else
  // set isRowActive to false
  // set activeColumns[j] to false
}
