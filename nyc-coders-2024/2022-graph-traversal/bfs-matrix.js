function bfs(startRow, startCol, matrix, target) {
  // direction vectors
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // create a queue
  // store the starting vertex
  const q = [];
  q.push([startRow, startCol]);

  // create set
  // create and add unique identifier to set
  const visited = new Set();

  const coordsKey = `${startRow}-${startCol}`;
  visited.add(coordsKey);

  while (q.length !== 0) {
    // dequeue a vertex
    const [r, c] = q.shift();

    // return true if target value found
    const curVal = matrix[r][c];
    if (curVal === target) {
      return true;
    }

    // explore neighbors
    // add neighbor to queue
    // if valid position and not visited
    for (const dir of dirs) {
      const [dr, dc] = dir;
      const newR = r + dr;
      const newC = c + dc;
      const coordsKey = `${newR}-${newC}`;
      if (isValidPos(newR, newC, matrix) && !visited.has(coordsKey)) {
        visited.add(coordsKey);
        q.push([newR, newC]);
      }
    }
  }

  return false;
}

function isValidPos(r, c, matrix) {
  return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const startR = 0;
const startC = 1;
const target = 15;

const res = bfs(startR, startC, arr, target);
console.log(res);
