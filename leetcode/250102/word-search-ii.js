/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function addWordToTrie(word, i, currObj) {
  if (i === word.length) {
    currObj["end"] = true;
    currObj["word"] = word;
    return;
  }

  const ch = word[i];

  if (!currObj.hasOwnProperty(ch)) {
    currObj[ch] = {};
  }

  addWordToTrie(word, i + 1, currObj[ch]);
}

var findWords = function (board, words) {
  const res = new Set();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const trie = {};
  for (const word of words) {
    addWordToTrie(word, 0, trie);
  }

  // if we are at end = true, add word to ans
  // if letter is not in trie at expected level, return
  // try every allowable adjacent letter (visited; out of bounds)
  console.log(JSON.stringify(trie), null, 2);
  function dfs(r, c, currObj) {
    if (currObj.hasOwnProperty("end")) {
      res.add(currObj["word"]);
    }

    if (r < 0 || c < 0 || r === board.length || c === board[0].length) {
      return;
    }

    if (board[r][c] === "*") {
      return;
    }

    const ch = board[r][c];

    if (!currObj.hasOwnProperty(ch)) {
      return;
    }

    board[r][c] = "*";

    for (const [dR, dC] of directions) {
      const newRow = r + dR;
      const newCol = c + dC;

      dfs(newRow, newCol, currObj[ch]);
    }

    board[r][c] = ch;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie);
    }
  }

  return [...res];
};
