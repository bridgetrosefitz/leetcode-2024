var Trie = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  /*
    "a" "ab" "abra"

    {a: {
        terminal: true
        b: {
            terminal: true
            r: {
                a: {
                    terminal: true
                }
            }
        }
    }}
    
    */

  function addWordToTrie(word, i, currObj) {
    if (i === word.length) {
      currObj["terminal"] = true;
      return;
    }

    const ch = word[i];

    if (!currObj[ch]) {
      currObj[ch] = {};
    }

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
      return !!currObj["terminal"];
    }

    const ch = word[i];

    if (!currObj[ch]) {
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
Trie.prototype.startsWith = function (prefix) {
  function searchForPrefix(word, i, currObj) {
    if (i === prefix.length) {
      return true;
    }

    const ch = word[i];

    if (!currObj[ch]) {
      return false;
    }

    return searchForPrefix(word, i + 1, currObj[ch]);
  }

  return searchForPrefix(prefix, 0, this.trie);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
