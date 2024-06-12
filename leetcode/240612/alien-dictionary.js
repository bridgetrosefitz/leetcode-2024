/**
 * @param {string[]} words
 * @return {string}
 */

// z: [x]
// x: [z]

// Do this breadth first
// Do this without recursion
// Do this passing in visited
// Check that I handle if there is no clear starting letter (aka letter which has no dependencies)

var alienOrder = function (words) {
  const adj = new Map();
  let hasNoLoops = false;
  const visited = new Set();
  const allLetters = Array.from(new Set(words.join("")));

  for (const letter of allLetters) {
    adj.set(letter, new Set());
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      processNeighbors(words[i], words[j]);
    }
  }

  function processNeighbors(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
      const word1Ch = word1[i];
      const word2Ch = word2[i];
      if (word1Ch === word2Ch) continue;

      const word1ChNeighbors = adj.get(word1Ch);
      word1ChNeighbors.add(word2Ch);
      break;
    }
  }

  function checkHasNoLoops(node) {
    visited.add(node);

    for (const neighbor of adj.get(node)) {
      if (visited.has(neighbor)) return false;
      if (!checkHasNoLoops(neighbor, visited)) return false;
    }

    return true;
  }

  for (const letter of adj.keys()) {
    visited.clear();
    hasNoLoops = checkHasNoLoops(letter);
  }

  if (!hasNoLoops) return "";

  // const dependencyLetters = Array.from(new Set(Array.from(adj.values()).flat()))
  const dependencyLetters = [
    ...new Set([...adj.values()].flatMap(set => [...set])),
  ];
  const startingLetters = allLetters.filter(
    letter => !dependencyLetters.includes(letter)
  );

  // t: [f]
  // w: [e, r]
  // r: [t]
  // e: [r]
  // f: []
  function buildWord(letter, word = "", visited = new Set()) {
    visited.add(letter);

    for (const neighbor of adj.get(letter)) {
      if (!visited.has(neighbor)) {
        return buildWord(neighbor, word) + letter;
      }
    }
  }

  return buildWord(startingLetters[0]);

  // traverse and return false if we find a loop

  // build word
};
