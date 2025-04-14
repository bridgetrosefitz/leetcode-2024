const example = ["app", "apple", "apples", "car", "cars", "dog"];
// i;
// j;

// for each word
// for each other word
// check if one is prefix of other, and vice versa

function generatePrefixPairs(list) {
  function getPrefixPair(word1, word2) {
    const shorterWord = word1.length < word2.length ? word1 : word2;
    const largerWord = shorterWord === word1 ? word2 : word1;

    const prefixOverlap = largerWord.slice(0, shorterWord.length);

    if (shorterWord === prefixOverlap) {
      return [shorterWord, largerWord];
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
