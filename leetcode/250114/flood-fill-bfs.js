/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  /*
        [
            [1,1,1],
            [1,1,0],
            [1,0,1]
        ]
    
    */
  const originalSourceColor = image[sr][sc];

  const q = [[sr, sc]];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (q.length) {
    const [r, c] = q.shift();

    image[r][c] = color;

    for (const [dR, dC] of directions) {
      const newRow = dR + r;
      const newCol = dC + c;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === image.length ||
        newCol === image[0].length
      ) {
        continue;
      }

      if (
        image[newRow][newCol] !== originalSourceColor ||
        image[newRow][newCol] === color
      ) {
        continue;
      }

      q.push([newRow, newCol]);
    }

    // don't q up if out of bounds
  }

  return image;
};
