/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const opening = [];
  const toRemove = new Set();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") {
      opening.push(i);
    } else if (ch === ")") {
      if (opening.length === 0) {
        toRemove.add(i);
      } else {
        opening.pop();
      }
    }
  }

  // remove remaining opening
  for (const i of opening) {
    toRemove.add(i);
  }

  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (toRemove.has(i)) {
      continue;
    }

    res.push(s[i]);
  }

  return res.join("");
};
