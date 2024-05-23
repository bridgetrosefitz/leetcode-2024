function wordCountEngine(words) {
  // make an array from string
  // remove punctuation and capitalisation from every word
  // make a map which counts occurrences of each word
  // create an array from the map
  // STABLE sort the array

  const countMap = new Map();
  const wordsArray = words.split(" ");
  const newWordsArray = [];

  wordsArray.forEach(originalWord => {
    const nonPunctuationStrings = originalWord.split(/[^a-zA-Z]+/);
    newWordsArray.push(nonPunctuationStrings.join("").toLowerCase());
  });

  newWordsArray.forEach(word => {
    if (countMap.has(word)) {
      countMap.set(word, countMap.get(word) + 1);
    } else {
      countMap.set(word, 0);
    }
  });

  const entries = Array.from(countMap.entries());

  const sortedEntries = entries.sort((a, b) => a[1] > b[1]);

  return sortedEntries.map(entry => [entry[0], entry[1].toString()]);
}
