/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  /*

    currMax = 2
    count = {
        A: 1
        B: 1
        C: 2
        D: 1
        E: 1
    }
    
    "BABBA"
    "ABCDECCBA" k = 2
      L
        R
    */

  let max = -Infinity;
  const count = new Map(
    Array.from({ length: 26 }, (_, i) => [
      String.fromCharCode(97 + i).toUpperCase(),
      0,
    ])
  );

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    count.set(ch, count.get(ch) + 1);

    const currWinner = Math.max(...count.values());
    const currWindowLength = right - left + 1;

    if (currWindowLength - currWinner - k > 0) {
      const leftCh = s[left];
      count.set(leftCh, count.get(leftCh) - 1);
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
