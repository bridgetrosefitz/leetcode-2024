/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let len = 0;
  let counts = { T: 0, F: 0 };
  let currMaxCount = 0;

  let start = 0;
  for (let end = 0; end < answerKey.length; end++) {
    let char = answerKey[end];
    let currLen = end - start + 1;

    counts[char]++;
    currMaxCount = Math.max(currMaxCount, counts[char]);

    if (currLen - currMaxCount > k) {
      counts[answerKey[start]]--;
      start++;
    } else {
      len = Math.max(len, currLen);
    }
  }

  return len;
};
