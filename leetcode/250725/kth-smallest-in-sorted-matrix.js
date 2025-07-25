/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  // get row and col of k
  // if we count the number of elements which are less than the mid, and that number is fewer than k
  // we know that the kth largest el has to be of a value greater than mid, so we can move left beyond mid

  /*

If the count is less than k, it means the kth smallest value must be greater than mid, so you move your search space up: left = mid + 1.
If the count is greater than or equal to k, it means the kth smallest value could be mid or something smaller, so you move your search space down: right = mid.
    count = 0
    j = 2
    [
        [1,5,9],
        L
        [10,11,13],
        [12,13,15],
                R
    ]

    log(maxValue - minValue)


    ROWS = 4
    COLS = 3
    k = 5 >> row 1, col 1
    k / cols = 1
    k % rows = 2

    k = 11, row 3, col 1

    k / cols = 3
    k % rows = 1

    how many rows have i used up to get to k >> k / cols 
    
    */
  // const rows = matrix.length
  // const cols = matrix[0].length
  // let row = Math.floor(k / cols)
  // let col = k % rows

  // return matrix[row][col]

  function check(matrix, mid, k, number) {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1; // add all els of the current col, since cols are sorted
        col++;
      } else {
        // check previous row
        row--;
      }
    }

    return count >= k;
  }

  const n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (check(matrix, mid, k, n)) {
      // if there are more or equal to k values before
      // go look on the left hand side til there's just k
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
