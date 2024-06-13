/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

const encode = (row, col) => `${row}-${col}`;

var nearestExit = function (maze, entrance) {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const q = [entrance];
  const visited = new Set();
  let steps = 0;

  while (q.length > 0) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const [row, col] = q.shift();
      const pos = `${row},${col}`;
      if (visited.has(pos)) continue;
      visited.add(pos);

      if (
        (row === 0 ||
          col === 0 ||
          row === maze.length - 1 ||
          col === maze[0].length - 1) &&
        !(row === entrance[0] && col === entrance[1])
      ) {
        return steps;
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
        const newPos = `${newRow},${newCol}`;
        if (visited.has(newPos)) continue;
        if (maze[newRow][newCol] === "+") continue;

        q.push([newRow, newCol]);
      }
    }

    steps++;
  }

  return -1;
};
