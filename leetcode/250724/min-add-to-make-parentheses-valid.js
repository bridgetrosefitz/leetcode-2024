/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  // if open are unclosed
  // if closed come before open

  let count = 0;
  let open = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch.toUpperCase() !== ch.toLowerCase()) {
      continue;
    }

    if (ch === "(") {
      open++;
    } else {
      if (open === 0) {
        count++;
      } else {
        open--;
      }
    }
  }

  count += open;

  return count;
};
