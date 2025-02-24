/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  // find starting cell
  // bfs
  // do not visit if obstacle or visited
  // return when we hit food

  let startRow;
  let startCol;
  let gridRows = grid.length;
  let gridCols = grid[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < gridRows; i++) {
    for (let j = 0; j < gridCols; j++) {
      if (grid[i][j] === "*") {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  const q = [[startRow, startCol, 0]]; // [[1,1,1],[2,1,1]]

  while (q.length) {
    const [currRow, currCol, length] = q.shift();

    // enqueue

    /*
        
        [X,X,X]
        [*,0,X]
        [0,#,X]
        */

    for (const [dR, dC] of dirs) {
      const newRow = currRow + dR;
      const newCol = currCol + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= gridRows ||
        newCol >= gridCols
      ) {
        continue;
      }

      if (grid[newRow][newCol] === "X") {
        continue;
      }

      if (grid[newRow][newCol] === "#") {
        return length + 1;
      }

      q.push([newRow, newCol, length + 1]);
      grid[newRow][newCol] = "X";
    }
  }

  return -1;
};
