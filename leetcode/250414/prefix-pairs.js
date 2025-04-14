const example = ["app", "apple", "apples", "car", "cars", "dog"];
// i;
// j;

// for each word
// for each other word
// check if one is prefix of other, and vice versa

function generatePrefixPairs(list) {
  const copy = [...list].sort();

  const res = [];

  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      const shorter = copy[i];
      const longer = copy[j];
      if (!longer.startsWith(shorter)) {
        break;
      }
      res.push([shorter, longer]);
    }
  }

  return res;
}
