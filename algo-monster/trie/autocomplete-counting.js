class Trie {
  constructor() {
    this.children = {};
    this.freq = 0;
  }

  insert(word) {
    let node = this;
    for (let char of word) {
      // if character is not a child, add it
      if (!node.children[char]) {
        node.children[char] = new Trie();
      }
      node = node.children[char];
      node.freq++;
    }
  }

  query(prefix) {
    let node = this;
    for (let char of prefix) {
      if (!node.children[char]) {
        return 0;
      }

      node = node.children[char];
    }

    return node.freq;
  }
}
