/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // build lookup

  const openToCloseLookup = {};
  const closeToOpenLookup = {};
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") {
      stack.push(i);
    } else if (ch === ")") {
      const openIndex = stack.pop();
      openToCloseLookup[openIndex] = i;
      closeToOpenLookup[i] = openIndex;
    }
  }

  // build string
  let currDirection = 1;
  let res = [];
  let i = 0;

  const netLengthOfS = s.length - Object.keys(openToCloseLookup).length * 2;

  while (res.length !== netLengthOfS) {
    if (s[i] === "(") {
      i = openToCloseLookup[i];
      currDirection *= -1;
    } else if (s[i] === ")") {
      i = closeToOpenLookup[i];
      currDirection *= -1;
    } else {
      res.push(s[i]);
    }
    i += currDirection;
  }

  return res.join("");

  // Why only one loop - how to spot this
  // just take one step at a time in a while loop (to keep it cleaner)
};
