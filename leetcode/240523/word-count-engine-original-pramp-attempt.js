function wordCountEngine(document) {
  const map = new Map();

  const words = document.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      // if (word[j] < "a" && word[j] > "z") {
      if (word[j].toUpperCase() === word[j].toLowerCase()) {
        console.log(word[j]);
        const split = word.split(word[j]);
        const withoutSymbol = split[0] + split[1];
        word = withoutSymbol;
      }
    }

    words[i] = word.toLowerCase();

    if (!map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  for (const [key, val] of map.entries()) {
    map.set(key, String(val));
  }

  return map.entries();
}

console.log(
  wordCountEngine(
    "Practice makes perfect. you'll only get Perfect by practice. just practice!"
  )
);
