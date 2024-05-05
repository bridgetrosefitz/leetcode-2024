function dfs(r, c, matrix, target, visited = new Set()) {
  // base case 1, 2
  if (isInvalidPos(r, c, matrix) || visited.has(matrix[r][c])) {
    return false;
  }

  // add current vertex value to visited
  const curNum = matrix[r][c];
  visited.add(curNum);

  // base case 3

  if (matrix[r][c] === target) {
    return true;
  }

  // recursive calls
  const hasTarget =
    dfs(r - 1, c, matrix, target, visited) ||
    dfs(r + 1, c, matrix, target, visited) ||
    dfs(r, c - 1, matrix, target, visited) ||
    dfs(r, c + 1, matrix, target, visited);

  return hasTarget;
}

function isInvalidPos(r, c, matrix) {
  return r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length;
}

const graph = {
  0: [1, 2],
  1: [2],
  2: [3],
  3: [1, 2],
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const startR = 0;
const startC = 1;
const target = 9;

const res = dfs(startR, startC, arr, target);
console.log(res);
