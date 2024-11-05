var maxLevelSum = function (root) {
  let maxSum = -Infinity;
  let maxLevel = 0;
  let currSum = 0; // CHECK
  let currLevel = 1;
  const q = [root];

  // while length in q
  // get number of nodes in curr level
  // iterate from 0 to less than nodes in curr level
  // add node val to sum
  // push children into q if they are not null

  // if currSum is greater than max
  // update max
  // update level
  // increment level
  // set sum to 0

  // return maxLevel

  while (q.length) {
    const numNodesCurrLevel = q.length;

    for (let i = 0; i < numNodesCurrLevel; i++) {
      const curr = q.shift();
      currSum += curr.val;

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    if (currSum > maxSum) {
      maxSum = currSum;
      maxLevel = currLevel;
    }

    currSum = 0;
    currLevel += 1;
  }

  return maxLevel;
};
