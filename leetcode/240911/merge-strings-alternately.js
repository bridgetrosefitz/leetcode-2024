/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // result (array)
  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < word1.length && pointer2 < word2.length) {
    result.push(word1[pointer1]);
    pointer1 += 1;

    result.push(word2[pointer2]);
    pointer2 += 1;
  }

  // iterate left to right
  // add letter from each word
  // increment pointers

  while (pointer1 < word1.length) {
    result.push(word1[pointer1]);
    pointer1 += 1;
  }

  while (pointer2 < word2.length) {
    result.push(word2[pointer2]);
    pointer2 += 1;
  }

  return result.join("");

  // while length remains in word1
  // add remaining letters from word1

  // ditto for word2

  // return result (join)

  // "abc"
  //     |
  // "def"
  //     |

  // "abc"
  //     |
  // "defg"
  //     |

  // ["a","d","b","e","c","f","g"]
  // "abcdef"
  // "ghi"

  // ""
  // "a"
};
