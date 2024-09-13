/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  // []
  // ["",""]
  // ["a"]
  // ["un", "up"]
  // ["", "up"]

  // keep track of current count
  // keep max count
  // build each combination
  // keep track of letters in a set
  // return false if we see a letter which is already in set
  // remove letters just added if invalid
  // return maxCount

  // optimization to remember which letters are in which s
  // >> store an array with a set for the letters in s at each index

  // use a for loop instead of a set

  let curr = 0;
  const seen = new Set();

  function backtrack(i, max) {
    if (i === arr.length - 1) return max;
    const str = arr[i];

    // go through every letter, if not valid, return
    for (const ch of str) {
      if (seen.has(ch)) {
        return false;
      }
    }

    for (const ch of str) {
      seen.add(ch);
    }

    curr += str.length;

    backtrack(i + 1, Math.max(max, curr));

    curr -= str.length;

    for (const ch of str) {
      seen.delete(ch);
    }

    // add to count
    // backtrack
    // remove from count

    // remove from set???
  }

  return backtrack(0, 0);
};
