var orangesRotting = function (grid) {
  let freshCount = 0;

  let bfs = [];

  let timer = 0;

  for (let i = 0; i < grid.length; i++) {
    // số hàng
    for (let a = 0; a < grid[i].length; a++) {
      if (grid[i][a] == 2) {
        bfs.push({ i: i, a: a });
      } else if (grid[i][a] == 1) {
        freshCount += 1;
      }
    }
  }
  if (freshCount == 0) {
    return 0;
  }
  let count = bfs.length;
  while (bfs.length != 0) {
    let { i, a } = bfs.shift();
    if (a + 1 < grid[i].length && grid[i][a + 1] == 1) {
      grid[i][a + 1] = -1;
      bfs.push({ i: i, a: a + 1 });
      freshCount -= 1;
    }
    if (a - 1 >= 0 && grid[i][a - 1] == 1) {
      grid[i][a - 1] = -1;
      bfs.push({ i: i, a: a - 1 });
      freshCount -= 1;
    }
    if (i + 1 < grid.length && grid[i + 1][a] == 1) {
      grid[i + 1][a] = -1;
      bfs.push({ i: i + 1, a: a });
      freshCount -= 1;
    }
    if (i - 1 >= 0 && grid[i - 1][a] == 1) {
      grid[i - 1][a] = -1;
      bfs.push({ i: i - 1, a: a });
      freshCount -= 1;
    }

    count -= 1;
    if (count == 0 && bfs.length != 0) {
      timer += 1;
      count = bfs.length;
    }
    // if(rottenCount == freshCount && bfs.length !=0){
    //      bfs.shift();
    // }
  }
  if (freshCount > 0) {
    return -1;
  }
  return timer;
};
