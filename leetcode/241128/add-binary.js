/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // "1010"
  //    |

  // "1001"
  //    |
  let res = [];
  let carry = 0;
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  while (aPointer >= 0 || bPointer >= 0) {
    const aVal = aPointer < 0 ? 0 : a[aPointer];
    const bVal = bPointer < 0 ? 0 : b[bPointer];
    const sum = parseInt(aVal) + parseInt(bVal) + carry;
    if (sum === 2) {
      carry = 1;
      res.push(0);
    } else if (sum === 1) {
      res.push(1);
      carry = 0;
    } else if (sum === 3) {
      res.push(1);
      carry = 1;
    } else {
      res.push(0);
      carry = 0;
    }

    aPointer--;
    bPointer--;
  }

  if (carry > 0) res.push(carry);
  // flip it
  return res.reverse().join("");

  // 11
  //  1
  // ------
  //  2

  // 1
  // 11
  // 11
  // ------
  2;
  0;
};
