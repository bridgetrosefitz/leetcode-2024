/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const originalColor = image[sr][sc];
  if (image[sr][sc] === newColor) return image;

  function dfs(image, r, c, prevColor, visited = new Set()) {
    // base cases
    // out of bounds
    // visited
    // not same value as neighbor
    const uniqueId = `${r}-${c}`;
    if (
      isOutOfBounds(r, c, image) ||
      visited.has(uniqueId) ||
      image[r][c] !== prevColor
    ) {
      return;
    }

    // add uniqueId to visited
    visited.add(uniqueId);
    // fill with color
    image[r][c] = newColor;

    // recursive call
    dfs(image, r - 1, c, originalColor, visited);
    dfs(image, r + 1, c, originalColor, visited);
    dfs(image, r, c - 1, originalColor, visited);
    dfs(image, r, c + 1, originalColor, visited);
  }

  dfs(image, sr, sc, image[sr][sc]);
  return image;
};

function isOutOfBounds(r, c, matrix) {
  return r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length;
}
