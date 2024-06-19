/**
 * @param {number[][]} bombs
 * @return {number}
 */

//  const minMax = {
//         0: {x: [-2,4], y: [-1, 5]},
//         1: {x: [1,3], y: [2,4]},
//         2: {x: [1, 5], y: [2, 6]}
//         3: {x: [1, 7], y: [2, 8]}
//         4: {x: [1, 9], y: [2, 10]}
//     }

//     const adj = {
//         0: [1,2], [1, 2]
//     }

//     const xCenter = {
//         1: [0], // << set
//         2: [1],
//         3: [2],
//         4: [3],
//         5: [4]
//     }

//     const yCenter = {
//         2: [0]
//         3: [1],
//         4: [2],
//         5: [3],
//         6: [4]

//     }

var maximumDetonation = function (bombs) {
  // create [yMin, yMax] and [xMin, xMax] for each node
  // make an adjacency list
  // for every key which has a value less than or equal
  // to current bomb's range, add to neighbors list
  // Traverse graph starting from every bomb and
  // see what the highest count is

  const minMax = new Map();
  const xCenter = new Map();
  const yCenter = new Map();

  bombs.forEach(([x, y, r], index) => {
    // make minMax
    const xMin = x - r;
    const xMax = x + r;
    const yMin = y - r;
    const yMax = y + r;
    const bombMinMax = {
      x: [xMin, xMax],
      y: [yMin, yMax],
    };
    minMax.set(index, bombMinMax);

    // make xCenter and yCenter
    if (xCenter.has(x)) {
      xCenter.get(x).push(index);
    } else {
      xCenter.set(x, []);
    }

    if (yCenter.has(y)) {
      yCenter.get(y).push(index);
    } else {
      yCenter.set(y, []);
    }
  });

  const adj = new Map();

  bombs.forEach((bomb, index) => {
    const xNeighbors = new Set();
    const yNeighbors = new Set();

    const bombXMin = minMax[index]["x"][0];
    const bombXMax = minMax[index]["x"][1];
    for (let i = bombXMin; i <= bombXMax; i++) {
      if (xCenter.has(i)) {
        const bombsInXRange = xCenter.get(i);
        xNeighbors = new Set([...xNeighbors, ...bombsInXRange]);
      }
    }

    const bombYMin = minMax[index]["y"][0];
    const bombYMax = minMax[index]["y"][1];
    for (let i = bombYMin; i <= bombYMax; i++) {
      if (yCenter.has(i)) {
        const bombsInYRange = yCenter.get(i);
        yNeighbors = new Set([...yNeighbors, ...bombsInYRange]);
      }
    }

    const neighbors = new Set();

    for (xNeighbor of xNeighbors) {
      if (yNeighbors.has(xNeighbor)) neighbors.add(xNeighbor);
    }

    adj.set(index, neighbors);
  });

  let max = 0;

  function dfs() {}
};
