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

//////////////More efficent//////

var numberCount = function (a, b) {
  let total = 0;
  let unique = true;
  const digits = new Set();

  for (let i = a; i <= b; i++) {
    const str = i.toString();
    for (let j = 0; j < str.length; j++) {
      if (digits.has(str[j])) {
        unique = false;
        break;
      }
      digits.add(str[j]);
    }

    if (unique) {
      total += 1;
    }

    unique = true;
    digits.clear();
  }

  return total;
};
