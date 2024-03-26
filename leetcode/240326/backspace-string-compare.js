var backspaceCompare = function (s, t) {
  let currS = s.length - 1;
  let currT = t.length - 1;
  let backspaceS = 0;
  let backspaceT = 0;

  while (currS >= 0 || currT >= 0) {
    while (currS >= 0) {
      if (s[currS] === "#") {
        currS--;
        backspaceS++;
      } else if (backspaceS > 0) {
        currS--;
        backspaceS--;
      } else break;
    }

    while (currT >= 0) {
      if (t[currT] === "#") {
        currT--;
        backspaceT++;
      } else if (backspaceT > 0) {
        currT--;
        backspaceT--;
      } else break;
    }

    if (s[currS] !== t[currT]) return false;
    if ((currS < 0 && currT >= 0) || (currT < 0 && currS >= 0)) return false;

    currS--;
    currT--;
  }

  return true;
};
