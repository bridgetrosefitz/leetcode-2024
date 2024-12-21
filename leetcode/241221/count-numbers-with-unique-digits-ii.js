/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function (a, b) {
  let total = 0;
  for (let i = a; i <= b; i++) {
    const str = i.toString();
    const unique = new Set(str);
    if (unique.size === str.length) {
      total += 1;
    }
  }

  return total;
};
