/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function addWordToTrie(word, i, obj) {
  if (i === word.length) {
    obj.end = true;
    obj.word = word;
    return;
  }

  const ch = word[i];
  if (!obj.hasOwnProperty(ch)) {
    obj[ch] = {};
  }

  addWordToTrie(word, i + 1, obj[ch]);
}

var findWords = function (board, words) {
  /*
    [
        ["a","b"],
        ["c","d"]
    ]

    "abcb", "abd", "ab"

            a
        b*
    d*    c
             b*

    ["ab","abd"]

    */

  // build trie from words
  const trie = {};
  for (const word of words) {
    addWordToTrie(word, 0, trie);
  }

  const res = new Set();

  function dfs(r, c, currObj) {
    // if out of bounds, return

    if (currObj.end) {
      res.add(currObj.word);
    }

    if (r < 0 || c < 0 || r === board.length || c === board[0].length) return;
    if (board[r][c] === "*") return;

    // if currTrieLocation + letter at r,c is the end of a word
    // push that word into res

    const ch = board[r][c];

    if (!currObj.hasOwnProperty(ch)) {
      return;
    }

    board[r][c] = "*";
    // generate options
    // visit each option
    dfs(r + 1, c, currObj[ch]);
    dfs(r - 1, c, currObj[ch]);
    dfs(r, c + 1, currObj[ch]);
    dfs(r, c - 1, currObj[ch]);

    board[r][c] = ch;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie);
    }
  }

  return [...res];
};
