/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let min = Infinity;
  let leftMin = 0;
  let rightMin = 0;

  const target = new Map();
  const counter = new Map();

  for (const ch of t) {
    target.set(ch, (target.get(ch) || 0) + 1);
    counter.set(ch, 0);
  }

  let diff = t.length;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (!target.has(ch)) {
      continue;
    }

    if (counter.get(ch) < target.get(ch)) {
      diff -= 1;
    }

    counter.set(ch, counter.get(ch) + 1);

    while (diff === 0) {
      const windowSize = right - left + 1;

      if (windowSize < min) {
        min = windowSize;
        leftMin = left;
        rightMin = right;
      }

      const leftCh = s[left];

      if (counter.has(leftCh) && counter.get(leftCh) === target.get(leftCh)) {
        diff += 1;
      }

      if (counter.has(leftCh)) {
        counter.set(leftCh, counter.get(leftCh) - 1);
      }

      left += 1;
    }
  }

  return min === Infinity ? "" : s.slice(leftMin, rightMin + 1);
};
