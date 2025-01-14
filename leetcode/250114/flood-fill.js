/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  /*
    
        [1,1,1]
        [1,1,0]
        [1,0,1]

        [0,0,0]
        [0,0,0]


    */

  const originalColor = image[sr][sc];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function traverse(r, c) {
    // check if cell is same color as original
    if (r < 0 || c < 0 || r === image.length || c === image[0].length) {
      return;
    }

    if (image[r][c] !== originalColor || image[r][c] === color) {
      return;
    }

    image[r][c] = color;

    // work

    for (const [dR, dC] of directions) {
      const newRow = r + dR;
      const newCol = c + dC;

      traverse(newRow, newCol);
    }
  }

  traverse(sr, sc);

  return image;
};
