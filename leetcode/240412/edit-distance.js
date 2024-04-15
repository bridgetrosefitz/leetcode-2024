function minDistance(word1, word2) {
  const cache = Array.from(
    { length: word2.length + 1 },
    () => new Array(word1.length + 1)
  );

  for (let j = 0; j < word2.length + 1; j++) {
    cache[word1.length][j] = word2.length - j;
  }

  for (let i = 0; i < word2.length + 1; i++) {
    cache[word2.length][i] = word1.length - i;
  }

  for (let i = 0; (i = word1.length - 1); i--) {
    for (let j = 0; (j = word2.length - 1); j--) {
      if (word1[i] === word2[j]) {
        cache[i][j] = cache[i + 1][j + 1];
      } else {
        cache[i][j] =
          1 + Math.min(cache[i + 1][j], cache[i][j + 1], cache[i + 1][j + 1]);
      }
    }
  }

  return cache[0][0];
}
