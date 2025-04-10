var subsets = function (nums) {
  // [1,2,3]

  function backtrack(i, curr, res) {
    res.push([...curr]);

    if (i === nums.length) {
      return;
    }

    for (let j = i; j < nums.length; j++) {
      curr.push(nums[j]);
      backtrack(j + 1, curr, res);
      curr.pop();
    }

    return res;
  }

  return backtrack(0, [], []);
};
