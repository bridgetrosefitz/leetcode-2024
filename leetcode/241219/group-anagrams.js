/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /*
    
    ["eat","tea","tan","ate","nat","bat"]
    
    Naive:
    - sort every string, then test for equivalence O(n * slog(s))

    Better:
    - O(1) lookup of each string
    
    {
        e: 1,
        a: 1,
        t: 1,

    }

    {
        "aet": ["eat", "tea"]
    }
    */

  const anagrams = {};

  for (let i = 0; i < strs.length; i++) {
    const copy = strs[i].slice().split("");
    const sortedStr = copy.sort().join();
    if (anagrams.hasOwnProperty(sortedStr)) {
      anagrams[sortedStr].push(strs[i]);
    } else {
      anagrams[sortedStr] = [strs[i]];
    }
  }

  return Object.values(anagrams);
};
