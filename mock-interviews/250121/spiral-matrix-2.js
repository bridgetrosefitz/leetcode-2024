/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;
  const ans = [];

  let row = 0;
  let col = 0;

  let UP = 0,
    RIGHT = 1,
    DOWN = 2,
    LEFT = 3;

  let direction = RIGHT;

  let UP_WALL = 0;
  let RIGHT_WALL = COLS;
  let DOWN_WALL = ROWS;
  let LEFT_WALL = -1;

  while (ans.length !== ROWS * COLS) {
    if (direction === RIGHT) {
      while (col < RIGHT_WALL) {
        ans.push(matrix[row][col]);
        col++;
      }

      col--;
      row++;

      RIGHT_WALL--;
      direction = DOWN;
    } else if (direction === DOWN) {
      while (row < DOWN_WALL) {
        ans.push(matrix[row][col]);
        row++;
      }

      row--;
      col--;

      DOWN_WALL--;
      direction = LEFT;
    } else if (direction === LEFT) {
      while (col > LEFT_WALL) {
        ans.push(matrix[row][col]);
        col--;
      }

      col++;
      row--;
      LEFT_WALL++;
      direction = UP;
    } else {
      // UP
      while (row > UP_WALL) {
        ans.push(matrix[row][col]);
        row--;
      }

      row++;
      col++;

      UP_WALL++;
      direction = RIGHT;
    }
  }
  return ans;
};
