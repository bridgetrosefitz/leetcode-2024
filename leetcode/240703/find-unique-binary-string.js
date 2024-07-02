/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let temp = "";
  let res = "";
  const set = new Set(nums);

  function backtrack() {
    if (temp.length === nums.length) {
      if (!set.has(temp)) {
        res = temp;
        return true;
      } else {
        return false;
      }
    }

    temp = temp + "1";
    if (backtrack()) return true;
    temp = temp.slice(0, temp.length - 1);

    temp = temp + "0";
    if (backtrack()) return true;
    temp = temp.slice(0, temp.length - 1);
  }

  backtrack();

  return res;
};
