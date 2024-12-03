/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  // bfs
  // load up gates into q
  // process level by level
  // don't queue up if wall / out of bounds / has a number greater than 0

  /*
    Test cases
    [
       ??? 
    ]
    */

  const q = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === 0) {
        q.push([row, col]);
      }
    }
  }

  let steps = 1;

  while (q.length) {
    const qLength = q.length;

    for (let i = 0; i < qLength; i++) {
      const [row, col] = q.shift();

      for (const [dR, dC] of dirs) {
        const newRow = row + dR;
        const newCol = col + dC;

        if (
          newRow < 0 ||
          newRow < 0 ||
          newRow >= rooms.length ||
          newCol >= rooms[0].length
        ) {
          continue;
        }

        if (rooms[newRow][newCol] === 2147483647) {
          q.push([newRow, newCol]);
          rooms[newRow][newCol] = steps;
        }
      }
    }

    steps += 1;
  }

  return rooms;
};
