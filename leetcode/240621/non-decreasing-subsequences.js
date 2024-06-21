var findSubsequences = function (nums) {
  const temp = [];
  const res = new Set(); // make this a set, if the array has a bunch of duplicates, it will be hard to know to only do the same number once, so just use a set

  function backtrack(i) {
    // base case
    if (i === nums.length) return;

    // work
    if (temp.length === 0 || nums[i] >= temp[temp.length - 1]) {
      temp.push(nums[i]);
    } else {
      return;
    }

    if (temp.length >= 2) res.add(JSON.stringify(temp));

    // backtrack
    for (let j = i + 1; j < nums.length; j++) {
      backtrack(j);
    }

    temp.pop();
  }

  for (let i = 0; i < nums.length; i++) {
    backtrack(i);
  }

  return [...res].map(JSON.parse);
};
