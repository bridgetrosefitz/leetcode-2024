/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  //    ["wrt","wrf","er","ett","rftt"]
  //      i     j

  // ADJ
  //     w: [e,r]
  //     e: [r]
  //     t: [f]
  //     r: [t]
  //      f: []

  // INDEGREES
  // w: 0
  // e: 1
  // t:
  // r:

  // create adj list

  // for each word
  // for each letter in word
  // if letter is the same, continue
  // else, put letter in word2 into adj list for letter in word1
  // TO DO: Find more performant way to do this

  // Topological sort

  const adj = {};
  const inDegrees = {};

  function processTwoWords(word1, word2) {
    // add letters to adj
    // add letters to inDegrees
    // if letter is different, add letter in word2 as neighbor of letter in word1
    // update inDegrees
    // if extra length in either word, add all the rest of the letters

    let index = 0;

    while (word1[index] && word2[index]) {
      const letter1 = word1[index];
      const letter2 = word2[index];
      if (!adj[letter1]) {
        adj[letter1] = new Set();
      }

      if (!adj[letter2]) {
        adj[letter2] = new Set();
      }

      if (!inDegrees.hasOwnProperty(letter1)) {
        inDegrees[letter1] = 0;
      }

      if (!inDegrees.hasOwnProperty(letter2)) {
        inDegrees[letter2] = 0;
      }

      if (letter1 !== letter2) {
        adj[letter1].add(letter2);
        // inDegrees[letter2]++
        break;
      }

      if (index < word1.length - 1 && index === word2.length - 1) {
        return false;
      }

      index++;
    }

    let index1 = index;
    let index2 = index;

    while (index1 < word1.length) {
      const letter = word1[index1];
      if (!adj[letter]) {
        adj[letter] = new Set();
      }

      if (!inDegrees.hasOwnProperty(letter)) {
        inDegrees[letter] = 0;
      }

      index1++;
    }

    while (index2 < word2.length) {
      const letter = word2[index2];
      if (!adj[letter]) {
        adj[letter] = new Set();
      }

      if (!inDegrees.hasOwnProperty(letter)) {
        inDegrees[letter] = 0;
      }

      index2++;
    }

    return true;
  }

  // BUILD ADJ LIST
  if (words.length === 1) {
    return [...new Set([...words[0]])].join("");
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!processTwoWords(words[i], words[i + 1])) return "";
  }

  // BUILD INDEGREES

  for (const neighbors of Object.values(adj)) {
    for (const neighbor of neighbors) {
      inDegrees[neighbor]++;
    }
  }

  // TOPOLOGICAL SORT
  const res = [];
  const q = [];

  for (const letter of Object.keys(adj)) {
    if (inDegrees[letter] === 0) {
      q.push(letter);
      res.push(letter);
    }
  }

  while (q.length) {
    const curr = q.shift();
    const neighbors = [...adj[curr]];

    for (const neighbor of neighbors) {
      inDegrees[neighbor] -= 1;
      if (inDegrees[neighbor] === 0) {
        q.push(neighbor);
        res.push(neighbor);
      }
    }
  }

  return res.length === Object.keys(adj).length ? res.join("") : "";
};
