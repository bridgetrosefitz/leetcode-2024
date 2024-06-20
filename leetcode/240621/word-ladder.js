/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // q
  // visited
  // if currWord is targetWord, return steps
  // compute every possible 1 letter different word from a-z
  // queue up each word if it's in wordList
  // add each word to visited

  const q = [];
  q.push([beginWord, 1]);
  const wordListSet = new Set(wordList);
  const visited = new Set();

  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  while (q.length) {
    const [currWord, steps] = q.shift();
    if (currWord === endWord) return steps;

    for (let i = 0; i < currWord.length; i++) {
      for (let letterI = 0; letterI < alpha.length; letterI++) {
        const newWord =
          currWord.slice(0, i) + alpha[letterI] + currWord.slice(i + 1);
        if (!wordListSet.has(newWord)) continue;
        if (visited.has(newWord)) continue;

        q.push([newWord, steps + 1]);
        visited.add(newWord);
      }
    }
  }

  return 0;

  // 6:38
};
