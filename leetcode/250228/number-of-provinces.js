/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  /*

    
        [
            [1,0,0],
               ^
        >   [1,1,0],
            [0,0,1]
        ]

        [
            [1,1,0],
            [1,1,0],
            [0,0,1]
        ]

        provinces = 0
        visited = {}

        [
            [1,1,1],
            [1,1,1],
            [1,1,1]
        ]
        
    */

  // recurse over connections in isConnected
  // keep counter of provinces
  // don't revisit by keeping a visited set

  let provinces = 0;

  for (let row = 0; row < isConnected.length; row++) {
    for (let col = 0; col < isConnected[0].length; col++) {
      if (row === col) {
        continue;
      }

      if (isConnected[row][col] === 1) {
        // visit every connected node
        // increment provinces
        visitProvince(row, col, -1);
        provinces++;
      }
    }
  }

  function visitProvince(row, col, prev) {
    isConnected[row][col] = 0;
    for (const neighbor of isConnected[col]) {
      if (col === neighbor || neighbor === prev) {
        continue;
      }

      if (isConnected[col][neighbor] === 1) {
        visitProvince(col, neighbor, row);
      }
    }
  }

  return provinces;
};
