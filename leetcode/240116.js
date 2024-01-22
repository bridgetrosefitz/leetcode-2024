var twoSum = function (nums, target) {
  // for each number
  // have we seen the complement before?
  // return the index of the complement and the current index
  // else, store a new key in the hashmap
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(complement, i);
    }
  }
};

var containsDuplicate = function (nums) {
  // create set of unique numbers seen
  // check if set contains element at nums[i]
  // return true
  // return false

  if (nums.length === 1) return false;

  const numbersSeen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numbersSeen.has(nums[i])) return true;
    else numbersSeen.add(nums[i]);
  }

  return false;
};
