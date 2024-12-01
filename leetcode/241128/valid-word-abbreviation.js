/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0;
  let j = 0;

  // substitution
  //   |
  // 12
  // |

  // applf
  //   |
  // a3e
  // |

  while (i < word.length) {
    if (j > abbr.length) return false;
    if (j === abbr.length) break;
    if (Number.isInteger(Number(abbr[j]))) {
      if (abbr[j] === "0") return false;
      let numStr = "";
      while (Number.isInteger(Number(abbr[j]))) {
        numStr += abbr[j];
        j++;
      }
      const num = Number(numStr);
      i += num;
    } else if (word[i] !== abbr[j]) {
      return false;
    } else {
      i++;
      j++;
    }
  }

  if (i === word.length && j === abbr.length) return true;
  return false;

  //  substitution
  //  ^
  //  i
  // abbr
  //  s10n
  //  ^
  //. j
};
