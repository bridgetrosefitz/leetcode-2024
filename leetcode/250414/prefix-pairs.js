const example = ["app", "apple", "apples", "car", "cars", "dog"];
i;
j;

// for each word
// for each other word
// check if one is prefix of other, and vice versa

function generatePrefixPairs(list) {
  function getPrefixPair(word1, word2) {
    if (word1.indexOf(word2) === 0) {
      return [word2, word1];
    }

    if (word2.indexOf(word1) === 0) {
      return [word1, word2];
    }

    return undefined;
  }

  const res = [];

  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const prefixPair = getPrefixPair(list[i], list[j]);
      if (prefixPair) {
        res.push(prefixPair);
      }
    }
  }

  return res;
}
