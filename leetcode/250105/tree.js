// Given a binary tree (root), return an array of all of the values of nodes at the very last level of the tree

/*

                    1
                  2   3
                4  5 n  n
              6 7 n n n n n n

                  [2,3]
                  [2]
                  [4]
                  [6,7]

                  tests = [
                    [[1,2,3], []],
                    [[1,2], []],
                    [[1], [X]],
                    [[], [X]],
                   [ [1,2,3,4], []]

                  ]




*/

function valsAtLastLevel(root) {
  if (!root) return [];

  let currLevel = [root];

  while (currLevel.length) {
    // [1] > [2, 3] > [4]

    const nextLevel = []; // []

    currLevel.forEach(node => {
      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    if (!nextLevel.length) {
      return currLevel.map(node => node.val);
    } else {
      currLevel = nextLevel;
    }
  }
}

// ===============
// BFS 2

function valsAtLastLevel2(root) {
  if (!root) return [];

  let q = [root];

  while (q.length) {
    const nodesAtCurrentLevel = q.length;

    for (let i = 0; i < nodesAtCurrentLevel; i++) {
      const curr = q[i];

      if (curr.left) {
        q.push(curr.left);
      }

      if (curr.right) {
        q.push(curr.right);
      }
    }

    if (q.length === nodesAtCurrentLevel) {
      return q.map(node => node.val);
    } else {
      q = q.slice(nodesAtCurrentLevel);
    }
  }
}

// =================
// DFS

function dfsShiz(root) {
  if (!root) {
    return [];
  }

  const res = [];
  let maxLevel = 0;

  function getLowestLevel(node, currLevel) {
    if (!node) {
      return;
    }

    maxLevel = Math.max(maxLevel, currLevel);
    getLowestLevel(node.left, currLevel + 1);
    getLowestLevel(node.right, currLevel + 1);
  }

  // can I do this without external variable

  function getNodes(node, currLevel) {
    if (!node) {
      return;
    }

    if (currLevel === maxLevel) {
      res.push(node.val);
    }

    getNodes(node.left, currLevel + 1);
    getNodes(node.right, currLevel + 1);
  }

  getLowestLevel(root, 0);
  getNodes(root, 0);

  return res;
}
