var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let total = 0;
  let subtractor = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);
    total += curr;
    if (prev < curr) {
      subtractor = prev;
      total = total - subtractor * 2;
    }
  }

  return total;
};
