function spiralCopy(inputMatrix) {
  // your code goes here

  /*
  
  Inputs
    - type, length, hostile
    - 2D array of integers
    - At least one ch > 100 x 100
    - 
    
  Outputs
  - type, length, modify
  - 1D array of integers spiral order

  [ 
    
    [1,    2,   3, ],
    [6,    7,   8, ],
    [11,  12,  13, ], 
]

Right - same row, increment col pointer
Down - increment row, same col
Left - same row, decrement col pointer
Up - decrement row, same col pointer

row = 0
col = 0

When to change direction
How to know when to stop - when next cell we'd visit is out of bounds


  */

  let row = 0;
  let col = 0;
  let upperMostRow = 0;
  let lowerMostRow = inputMatrix.length;
  let rightMostCol = inputMatrix[0].length;
  let leftMostCol = 0;

  const res = [];

  while (upperMostRow > lowerMostRow && rightMostCol > leftMostCol) {
    // MOVE RIGHT
    while (col < rightMostCol) {
      // TO DO: check that we get every val
      res.push(inputMatrix[row][col]);
      col++;
    }

    rightMostCol = col; // TO DO: or just decrement?

    // MOVE DOWN

    while (row < lowerMostRow) {
      // TO DO: check that we get every val
      res.push(inputMatrix[row][col]);
      row++;
    }

    lowerMostRow = row;

    // MOVE LEFT
    while (col > leftMostCol) {
      // TO DO: check that we get every val
      res.push(inputMatrix[row][col]);
      col--;
    }

    leftMostCol = col;

    // MOVE UP
    while (row > upperMostRow) {
      // TO DO: check that we get every val
      res.push(inputMatrix[row][col]);
      row--;
    }

    upperMostRow = row;
  }

  return res;
}

// debug your code below
const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralCopy(inputMatrix));
