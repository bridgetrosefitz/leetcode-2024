/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  /*
    Inputs: grid int[][] // 0, -1, 2147843647
    Outputs: grid, with 2147843647 replaced with integer / 2147843647 >> nearest distance to gate

    [0,3,0,3,0]
    [0,2,0,3,1]

    */

  const q = [];
  const canReach = new Set();
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 2147843647) {
        q.push([i, j, i, j, 0, 0]);
      }
      if (rooms[i][j] === 0) {
        canReach.add(`${i}-${j}`);
      }
    }
  }

  while (q.length) {
    const [row, col, ogRow, ogCol, steps, eventualReach] = q.shift();

    // work
    if (eventualReach === 1) {
      rooms[row][col] = steps;
    }

    for (const [dR, dC] of dirs) {
      const newRow = row + dR;
      const newCol = col + dC;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === rooms.length ||
        newCol === rooms[0].length
      ) {
        continue;
      }

      if (rooms[newRow][newCol] === -1) {
        continue;
      }

      if (canReach.has(`${newRow}-${newCol}`)) {
        canReach.add(`${row}-${col}`);
        q.push([newRow, newCol, ogRow, ogCol, steps + 1, 1]);
        continue;
      }

      q.push([newRow, newCol, ogRow, ogCol, steps + 1, 0]);

      // queue up
      // if newRow and newCol is in set, shortcut
    }
  }

  return rooms;
};

// should have gone backwards
// should have talked more about pros and cons -- breadth first iteration
