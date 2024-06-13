/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

const encode = (row, col) => `${row}-${col}`;

var nearestExit = function (maze, entrance) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const q = [];
  q.push([...entrance, 0]);
  const visited = new Set();

  while (q.length) {
    const [row, col, steps] = q.shift();

    visited.add(encode(row, col));

    if (
      row === 0 ||
      col === 0 ||
      row === maze.length - 1 ||
      col === maze[0].length - 1
    ) {
      if (!(row === entrance[0] && col === entrance[1])) {
        return steps;
      }
    }

    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= maze.length ||
        newCol >= maze[0].length
      )
        continue;
      if (maze[newRow][newCol] === "+") continue;
      if (visited.has(encode(newRow, newCol))) continue;

      q.push([newRow, newCol, steps + 1]);
    }
  }

  return -1;
};
