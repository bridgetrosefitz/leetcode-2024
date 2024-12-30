class WordDictionary {
  constructor() {
    this.trie = {};
  }
}

/**
 * @param {string} word
 * @return {void}
 */
// word: "abc" search: "ab."
/*
            
            {
                c: {
                    end: true
                }
            }
            */

WordDictionary.prototype.addWord = function (word) {
  function addWordToTrie(word, index, currObj) {
    if (index === word.length) {
      currObj.end = true;
      return;
    }

    const ch = word[index];

    if (!currObj.hasOwnProperty(ch)) {
      currObj[ch] = {};
    }

    addWordToTrie(word, index + 1, currObj[ch]);
  }

  addWordToTrie(word, 0, this.trie);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function searchInTrie(word, index, currObj) {
    // reach of word
    // letter won't exist
    // handle .
    if (index === word.length) {
      return !!currObj.end;
    }

    const ch = word[index];

    if (ch === ".") {
      for (const key of Object.keys(currObj)) {
        if (searchInTrie(word, index + 1, currObj[key])) return true;
      }

      return false;
    }

    if (!currObj.hasOwnProperty(ch)) {
      return false;
    }

    return searchInTrie(word, index + 1, currObj[ch]);
  }

  return searchInTrie(word, 0, this.trie);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
