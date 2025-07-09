/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const opening = [];
  const closing = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === ")") {
      if (opening.length === 0) {
        closing.push(i);
      } else {
        opening.pop();
      }
    } else if (ch === "(") {
      opening.push(i);
    }
  }

  let openingPointer = 0;
  let closingPointer = 0;

  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (i === opening[openingPointer]) {
      openingPointer++;
      continue;
    }

    if (i === closing[closingPointer]) {
      closingPointer++;
      continue;
    }

    res.push(s[i]);
  }

  return res.join("");
};
