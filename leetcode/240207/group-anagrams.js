var groupAnagrams = function (strs) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sortedWord = [...word].sort().join("");
    if (map.has(sortedWord)) map.get(sortedWord).push(word);
    else map.set(sortedWord, [word]);
  }

  for (pair of map) {
    result.push(pair[1]);
  }

  return result;
};
