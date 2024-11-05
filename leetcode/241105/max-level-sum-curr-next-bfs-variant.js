/*
 input: node (binary tree root)
 output: integer (level at which we have max sum of all levels (the LOWEST one))

                1
        7.           0
    7       n      n.   n

    2

    - equal max sum
    - negative number at level which seems to have greater sum first
    - null root

    time: O(n)
    space: O(n/2)
 */

var maxLevelSum = function (root) {
  let currLevel = 1;
  let currSum = 0;
  let maxSum = -Infinity;
  let maxLevel = 1;
  let currLevelNodes = [root];

  // while length in currLevelNodes
  while (currLevelNodes.length) {
    const nextLevelNodes = [];
    // for each node in currLevelNodes
    currLevelNodes.forEach(node => {
      // add node val to sum
      // queue up next level (non-null) nodes into nextLevel
      currSum += node.val;
      if (node.left) nextLevelNodes.push(node.left);
      if (node.right) nextLevelNodes.push(node.right);
    });

    if (currSum > maxSum) {
      maxSum = currSum;
      maxLevel = currLevel;
    }

    currLevel += 1;
    currSum = 0;
    currLevelNodes = nextLevelNodes;

    // if currSum is greater than maxSum
    // update maxSum
    // update maxLevel
    // reset currSum to 0
    // increment level
    // set currLevelNodes to be nextLevelNodes
  }

  return maxLevel;
};
