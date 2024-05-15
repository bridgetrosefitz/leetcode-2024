// make a map
// make res array
// find each word by iterating over the string
// strip out capitals and symbols
// increment, or store new key in map with index of first letter

// go through every entry in map
// make an array

function wordFrequency(document) {
  const map = new Map();

  const words = document.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < words.length; j++) {
      if (word[j] < "a" && word[j] > "z") {
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

// what if map didn't store insertion order
// what if I couldn't use split
