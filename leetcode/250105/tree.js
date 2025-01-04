// Given a binary tree (root), return an array of all of the values of nodes at the very last level of the tree

/*

                    1
                  2   3
                4  n n  n
              n n n n n n n n

                  [2,3]
                  [2]
                  [4]

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
