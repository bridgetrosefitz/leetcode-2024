/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  if (answerKey.length === 1) return 1;

  let max = 0;
  let left = 0;

  const counter = {
    T: 0,
    F: 0,
  };

  for (let right = 0; right < answerKey.length; right++) {
    const rightCh = answerKey[right];
    counter[rightCh]++;

    while (Math.min(counter["T"], counter["F"]) > k) {
      const leftCh = answerKey[left];
      counter[leftCh]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
