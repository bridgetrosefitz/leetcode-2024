/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  /*
    res = ["a","a","a"]
    pointer = 0
    str = "a"
    number = 0 3
    "3[a]2[bc]"
         ^

    ""
    "ab"

    // if ch is a number, build the full number
    // build string
    // if we see a number, call decode again and append return value to res
    // if we see a parenthesis, return value we built
    // append string number times

    // if we see a number, call decode
    // decode
        // builds number 

    
    */
  // "3[a]2[bc]"
  //    i
  const isDigit = ch => ch >= "0" && ch <= "9";

  let res = []; // ["a","a","a"]
  let i = 0;

  function decode(start) {
    let number = 0; // 3 0
    let subStr = []; // ["a"] []

    while (j < s.length) {
      while (isDigit(s[j])) {
        number = number * 10 + Number(s[j]);
        j++;
      }
      // when we reach end of number, will be at a "["

      // "3[a2[c]]"
      // ^

      // when the string ends, we will either encounter a digit or "]"
      while (s[j] !== "]" && !isDigit(s[j])) {
        subStr.push(s[j]);
        j++;
      }

      if (isDigit(s[j])) {
        subStr = subStr.concat(decode(j));
      }

      const repeatedStr = new Array(number).fill(subStr).flat();
      // ["a","a","a"] // []
      res = res.concat(repeatedStr);
      number = 0;
      subStr = [];
      i++;
    }
  }

  decode(0);

  return res.join("");
};
