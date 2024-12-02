/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  /*
    
        test cases = [
            [1,1,1],
            [1,1,0],
            [1,0,1] [],
            one cell [],

        ]

        Inputs:
        - type
        -- grid - int[][]
        -- sr - int (row of og cell)
        -- sc - int (col of og cell)
        -- color - int (new color)
        - length
        -- minimum 1
        - hostile
        -- negative values?
        -- sr sc will always be within grid? YES

        Outputs:
        - type
        -- int[][] (after flood fill)
        - length (same as input grid)
        - modify?

    */

  const q = [[sr, sc]];
  const ogCellColor = image[sr][sc];
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Set();
  visited.add(`${sr}-${sc}`);

  while (q.length) {
    // [1,1,1],
    // [1,1,0],
    // [1,0,1]
    const [row, col] = q.shift();

    // change color
    // q up neighbors
    // is curr cell same as og cell color
    // in bounds etc

    image[row][col] = color;
    visited.add(`${row}-${col}`);

    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= image.length ||
        newCol >= image[0].length
      ) {
        continue;
      }

      if (image[newRow][newCol] !== ogCellColor) {
        continue;
      }

      if (visited.has(`${newRow}-${newCol}`)) {
        continue;
      }

      q.push([newRow, newCol]);
    }
  }

  return image;
};
