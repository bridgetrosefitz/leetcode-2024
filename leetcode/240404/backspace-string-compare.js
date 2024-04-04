var backspaceCompare = function (s, t) {
  let currS = s.length - 1;
  let currT = t.length - 1;
  let backspaceS = 0;
  let backspaceT = 0;

  while (currS >= 0 || currT >= 0) {
    while (s[currS] === "#") {
      backspaceS++;
      currS--;
    }

    while (t[currT] === "#") {
      backspaceT++;
      currT--;
    }

    while (backspaceS > 0) {
      if (s[currS] === "#") {
        currS--;
        backspaceS++;
      } else {
        currS--;
        backspaceS--;
      }
    }

    while (backspaceT > 0) {
      if (t[currT] === "#") {
        currT--;
        backspaceT++;
      } else {
        currT--;
        backspaceT--;
      }
    }

    if (s[currS] === "#" || t[currT] === "#") continue;
    if (s[currS] !== t[currT]) return false;

    currS--;
    currT--;

    if (s[currS] === "#" || t[currT] === "#") continue;
    if ((currS < 0 && currT >= 0) || (currT < 0 && currS >= 0)) return false;
  }

  return true;
};
