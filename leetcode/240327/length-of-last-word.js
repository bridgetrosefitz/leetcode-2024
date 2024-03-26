var lengthOfLastWord = function (s) {
  if (s.length === 1) return 1;
  let end = -Infinity;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") end = Math.max(i, end);
    if (end === 0) return 1;
    if (end > -Infinity && i === 0 && s[i] !== " ") return end + 1;
    if (end > -Infinity && s[i] === " ") return end - i;
  }
};
