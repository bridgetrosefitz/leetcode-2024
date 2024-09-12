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
  let max = 0;
  const seen = new Set();

  function backtrack(i) {
    max = Math.max(max, curr);
    if (i === arr.length - 1) return;

    for (const ch of arr[i]) {
      if (seen.has(ch)) return false;

      seen.add(ch);
      curr += 1;
    }

    backtrack(i + 1);

    for (const ch of arr[i]) {
      // if(seen.has(ch))
    }

    // backtrack
    // update max
    // decrement count for letters previously added
  }

  backtrack(0);
  return max;
};
