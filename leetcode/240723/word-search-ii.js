/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let trieNodes = [];
  let nodeIdCounter = 0;

  function createTrieNode() {
    const newNodeId = nodeIdCounter++;
    trieNodes[newNodeId] = { children: Array(26).fill(null), ref: -1 };
    return newNodeId;
  }

  function insertIntoTrie(word, ref) {
    let nodeId = 0;
    for (const char of word) {
      const index = char.charCodeAt(0) - 97;
      if (trieNodes[nodeId].children[index] === null) {
        trieNodes[nodeId].children[index] = createTrieNode();
      }
      nodeId = trieNodes[nodeId].children[index];
    }

    trieNodes[nodeId].ref = ref;
  }

  function findWordsHelper(board, words) {
    trieNodes = [];
    nodeIdCounter = 0;
    createTrieNode();

    words.forEach((word, index) => insertIntoTrie(word, index));

    const rows = board.length;
    const cols = board[0].length;
    const foundWords = [];

    const directions = [-1, 0, 1, 0, -1];

    function dfs(nodeId, x, y, curWord) {
      const charIndex = board[x][y].charCodeAt(0) - 97;
      const nextNodeId = trieNodes[nodeId].children[charIndex];
      if (nextNodeId === null) return;

      curWord += board[x][y];

      if (trieNodes[nextNodeId].ref !== -1) {
        foundWords.push(words[trieNodes[nextNodeId].ref]);
        trieNodes[nextNodeId.ref] = -1; // mark the word as discovered
      }

      const originalChar = board[x][y];
      board[x][y] = "#"; // mark the current position as visited

      // explore all possible directions
      for (let i = 0; i < 4; i++) {
        const newX = x + directions[i];
        const newY = y + directions[i + 1];

        // continue dfs id new position is within boundaries and not visited
        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          board[newX][newY] !== "#"
        ) {
          dfs(nextNodeId, newX, newY, curWord);
        }
      }

      board[x][y] = originalChar; // reset cell back to original state
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dfs(0, i, j, "");
      }
    }

    return foundWords;
  }

  return findWordsHelper(board, words);
};
