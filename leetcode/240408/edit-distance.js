/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const memo = Array.from({ length: word1.length + 1 }, () =>
    Array(word2.length + 1).fill(null)
  );

  function minDistanceRecur(word1, word2, word1Index, word2Index) {
    if (word1Index === 0) {
      return word2Index;
    }

    if (word2Index === 0) {
      return word1Index;
    }

    if (memo[word1Index][word2Index] !== null)
      return memo[word1Index][word2Index];

    let minEditDistance = 0;

    if (word1[word1Index - 1] === word2[word2Index - 1]) {
      minEditDistance = minDistanceRecur(
        word1,
        word2,
        word1Index - 1,
        word2Index - 1
      );
    } else {
      const insertOperation = minDistanceRecur(
        word1,
        word2,
        word1Index,
        word2Index - 1
      );
      const deleteOperation = minDistanceRecur(
        word1,
        word2,
        word1Index - 1,
        word2Index
      );
      const replaceOperation = minDistanceRecur(
        word1,
        word2,
        word1Index - 1,
        word2Index - 1
      );

      minEditDistance =
        Math.min(insertOperation, deleteOperation, replaceOperation) + 1;
    }
    memo[word1Index][word2Index] = minEditDistance;
    return minEditDistance;
  }
  return minDistanceRecur(word1, word2, word1.length, word2.length);
};
