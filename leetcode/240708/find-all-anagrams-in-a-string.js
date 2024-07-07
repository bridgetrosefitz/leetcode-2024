/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  const ans = [];
  const count = new Map(p.split("").map(key => [key, 0]));
  const target = new Map(count);

  for (let i = 0; i < p.length; i++) {
    if (target.has(s[i])) count.set(s[i], count.get(s[i]) + 1);
    target.set(p[i], target.get(p[i]) + 1);
  }

  if (isMatch(target, count)) {
    ans.push(0);
  }

  for (let right = p.length; right < s.length; right++) {
    // remove previous left
    const prevLeft = right - p.length;
    const rightLetter = s[right];
    const leftLetter = s[prevLeft];
    if (target.has(rightLetter))
      count.set(rightLetter, count.get(rightLetter) + 1);
    if (target.has(leftLetter))
      count.set(leftLetter, count.get(leftLetter) - 1);

    if (isMatch(target, count)) {
      ans.push(prevLeft + 1);
    }
  }

  return ans;

  function isMatch(target, actual) {
    for (const key of actual.keys()) {
      if (target.get(key) !== actual.get(key)) {
        return false;
      }
    }

    return true;
  }
};
