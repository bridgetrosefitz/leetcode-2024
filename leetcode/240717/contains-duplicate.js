/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

// OR

var containsDuplicate2 = function (nums) {
  return new Set(nums).size !== nums.length;
};
