var minWindow = function (s, t) {
  if (t.length === 0 || t.length > s.length) return "";

  const countT = new Map();
  const window = new Map();

  for (char of t) {
    countT.set(char, countT.get(char) || 0 + 1);
  }

  let have = 0;
  const need = countT.size;
  let res = [0, 0];
  let resLen = Infinity;

  let left = 0;

  for (right in s) {
    const char = s[right];
    window.set(char, window.get(char) || 0 + 1);

    if (window.has(char) && window.get(char) === countT.get(char)) {
      have += 1;
    }

    while (have === need) {
      // update our result
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      // pop from the left of our window
      window.set(s[left], window.get(s[left]) - 1);
      if (countT.has(s[left]) && window.get(s[left]) < countT.get(s[left])) {
        have -= 1;
        left += 1;
      }
    }
    left = res[0];
    right = res[1];
    return resLen !== Infinity ? s.substring(left, right + 1) : "";
  }
};
