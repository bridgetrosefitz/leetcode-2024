class Trie {
  constructor() {
    this.root = {};
  }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  function addWord(i, level) {
    if (i === word.length) {
      level.end = true;
      return;
    }

    const ch = word[i];
    if (!level.hasOwnProperty(ch)) {
      level[ch] = {};
    }

    addWord(i + 1, level[ch]);
  }

  addWord(0, this.root);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  function traverse(i, level) {
    if (i === word.length) {
      if (level.end) {
        return true;
      } else {
        return false;
      }
    }

    const ch = word[i];
    if (!level.hasOwnProperty(ch)) {
      return false;
    }
    if (!traverse(i + 1, level[ch])) return false;
    return true;
  }

  if (!traverse(0, this.root)) return false;
  return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
