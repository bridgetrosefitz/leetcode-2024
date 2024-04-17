function compareMaps(map1, map2) {
  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }

  for (key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
}

var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];
  const required = {};
  const actual = {};
  const res = [];

  for (let i = 0; i < p.length; i++) {
    required[p[i]] = (required[p[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    actual[s[i]] = (actual[s[i]] || 0) + 1;

    if (i >= p.length) {
      if (actual[s[i - p.length]] === 1) {
        delete actual[s[i - p.length]];
      } else {
        actual[s[i - p.length]]--;
      }
    }

    if (compareMaps(required, actual)) {
      res.push(i - p.length + 1);
    }
  }

  return res;
};
