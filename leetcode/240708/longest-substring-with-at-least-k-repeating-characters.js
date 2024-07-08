/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  // "caaabbbcc"
  //     R
  // L
  // "caaabb"
  //  R
  // L

  // I need a way to make a decision on whether to move R or L
  // Sliding window way is a bit complicated
  // Other way
  // > even if you do a bunch of stuff per letter, it won't be too bad
  // go through once and build a counter,
  // e.g. {c: 1, a: 3, b: 2} >> we know c and b are NO CHANCE
  // every time you see a c or a b, I reset

  // "acaa"
  // "aabbcab"
  // {c: 1, a: 3, b: 3}
  // break the string at every c, and split it into substrings
  // > "aabb" "ab" {a: 2, b: 2} {a: 1, b: 1}

  // "acaabbabdbbcab" {a: 5, b: 6, c: 2, d: 1}
  // "a" "aabbabdbb" "ab" {a: 1}, {a: 3, b: 5, d: 1}, {a: 1, b: 1} << if all totals are under k, ignore
  // "aabbab" "bb" >> return both lengths >> at parent step, receives multiple results from his substrings, which each return a number that was ultimately valid

  // [{a: 0, b: 0, c: 0}, {a: 0, b: 0, c: 0}, {a: 0, b: 0, c: 0}, {a: 0, b: 0, c: 0}, {a: 0, b: 0, c: 0}, {a: 0, b: 0, c: 0}]

  // sliding window is similar > have to go through it 26 times. Each time, looking for solutions with one letters, two letters, three, etc
  // base cases
  // min
  // count, starts as empty
  // for each ch at right
  // if key doesn't exist, add it and set to 1
  // else increment
  // check if every key in count is >= k
  // if so, upate min to be min of min and right - left + 1

  // return min

  //////////////

  // for a given string
  // make a counter of its characters
  // if all values are less than k, return 0
  // if all values are greater than or equal to k, return length of string
  // split the string on the first ch that has value < k
  // return the max of every number returned by recursing on these substrings

  function findMax(str) {
    const count = {};
    for (const letter of str) {
      count[letter] = (count[letter] || 0) + 1;
    }

    if (Math.max(...Object.values(count)) < k) return 0;
    if (Math.min(...Object.values(count)) >= k) return str.length;

    const letterToSplitOn = Object.entries(count).find(
      ([letter, value]) => value < k
    )[0];
    const substrings = str.split(letterToSplitOn);

    const maxOptions = substrings.map(findMax);
    return Math.max(...maxOptions);
  }

  return findMax(s);
};
