/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// BOTTOM UP (LC solution, but TLE on some examples)
var minDistance = function (word1, word2) {
  return minDistanceRecur(word1, word2, word1.length, word2.length);

  function minDistanceRecur(word1, word2, word1Index, word2Index) {
    if (word1Index === 0) {
      return word2Index;
    }

    if (word2Index === 0) {
      return word1Index;
    }

    if (word1[word1Index - 1] === word2[word2Index - 1]) {
      return minDistanceRecur(word1, word2, word1Index - 1, word2Index - 1);
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

      return Math.min(insertOperation, deleteOperation, replaceOperation) + 1;
    }
  }
};
