function shortestWordEditPath(source, target, words) {
  /**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/

  const alphabet = "abcdefghijklmnopqrstuvwzyz";
  const wordset = new Set(words);
  const queue = [[source, 0]];
  const seen = new Set();

  while (queue.length) {
    const [word, depth] = queue.shift();
    if (word === target) return depth;

    for (let i = 0; i < word.length; i++) {
      for (const ch of alphabet) {
        let word2 = word.slice();
        word2 = word2.slice(0, i) + ch + word2.slice(i + 1);
        if (wordset.has(word2) && !seen.has(word2)) {
          queue.push([word2, depth + 1]);
          seen.add(word2);
        }
      }
    }
  }

  return -1;
}

console.log(
  shortestWordEditPath("bit", "dog", [
    "but",
    "put",
    "big",
    "pot",
    "pog",
    "dog",
    "lot",
  ])
);
