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

// potentially do [0 / 1 / 2] thing
// traverse only once to check for loops and build
var alienOrder = function (words) {
  const adj = new Map();
  let hasNoLoops = false;
  const visited = new Set();
  const allLetters = Array.from(new Set(words.join("")));

  for (const letter of allLetters) {
    adj.set(letter, new Set());
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!processNeighbors(words[i], words[i + 1])) return "";
  }

  function processNeighbors(word1, word2) {
    const minLength = Math.min(word1.length, word2.length);

    // if word1 and word2 agree up to minLength && length of word1 is
    // strictly greater than length of word2, stop everything and return ""
    for (let i = 0; i < word1.length; i++) {
      const word1Ch = word1[i];
      const word2Ch = word2[i];
      if (word2Ch === undefined) return false;
      if (word1Ch === word2Ch) continue;

      const word1ChNeighbors = adj.get(word1Ch);
      word1ChNeighbors.add(word2Ch);
      return true;
    }

    return true;
  }

  function checkHasNoLoops(node) {
    visited.add(node);

    for (const neighbor of adj.get(node)) {
      if (visited.has(neighbor)) return false;
      if (!checkHasNoLoops(neighbor)) return false;
    }

    return true;
  }

  for (const letter of adj.keys()) {
    visited.clear(); // all the information is lost instead of having a "2", for efficiency
    if (!checkHasNoLoops(letter)) return "";
  }

  if (!hasNoLoops) return "";

  // const dependencyLetters = Array.from(new Set(Array.from(adj.values()).flat()))
  const dependencyLetters = [
    ...new Set([...adj.values()].flatMap(set => [...set])),
  ];
  const startingLetters = allLetters.filter(
    letter => !dependencyLetters.includes(letter)
  );
  console.log(startingLetters);

  // t: [f]
  // w: [e, r]
  // r: [t]
  // e: [r]
  // f: []

  // a: [c]
  // b: [c]
  // c: []

  // ac

  const visitedWhileBuilding = new Set();

  function buildWord(letter, subword = "") {
    visitedWhileBuilding.add(letter);

    for (const neighbor of adj.get(letter)) {
      if (!visitedWhileBuilding.has(neighbor)) {
        subword = buildWord(neighbor, subword);
      }
    }

    subword += letter;

    return subword;
  }

  let word = "";

  for (const startingLetter of startingLetters) {
    word += buildWord(startingLetter);
  }

  return word.split("").reverse().join("");

  // traverse and return false if we find a loop

  // build word
};
