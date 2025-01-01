var Trie = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  function addWordToTrie(word, i, currObj) {
    if (i === word.length) {
      currObj["end"] = true;
      return;
    }

    const ch = word[i];

    currObj[ch] = {};

    addWordToTrie(word, i + 1, currObj[ch]);
  }

  addWordToTrie(word, 0, this.trie);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  function searchInTrie(word, i, currObj) {
    if (i === word.length) {
      return !!currObj.hasOwnProperty("end");
    }

    const ch = word[i];

    if (!currObj.hasOwnProperty(ch)) {
      return false;
    }

    return searchInTrie(word, i + 1, currObj[ch]);
  }

  return searchInTrie(word, 0, this.trie);
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
