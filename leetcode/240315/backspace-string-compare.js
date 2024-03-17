"xywrrmp";
"xywrrmu#p";

var backspaceCompare = function (s, t) {
  let pS = s.length - 1;
  let pT = t.length - 1;

  let spacesS = 0;
  let spacesT = 0;

  while (pS >= 0 || pT >= 0) {
    while (spacesS) {
      pS--;
      spacesS--;
    }
    while (spacesT) {
      pT--;
      spacesT--;
    }

    while (s[pS] === "#") {
      spacesS++;
      pS--;
    }

    while (s[pT] === "#") {
      spacesT++;
      pT--;
    }

    if (pS >= 0 && pT >= 0 && s[pS] !== t[pT]) return false;
    if (pS >= 0 !== pT >= 0) return false;
    pS--;
    pT--;
  }

  return true;
};

// var backspaceCompare = function (s, t) {
//   let pS = s.length - 1;
//   let pT = t.length - 1;

//   let spacesS = 0;
//   let spacesT = 0;

//   while (pS >= 0 || pT >= 0) {
//     while (pS >= 0) {
//       if (s[pS] === "#") {
//         spacesS++;
//         pS--;
//       } else if (spacesS > 0) {
//         spacesS--;
//         pS--;
//       } else break;
//     }

//     while (pT >= 0) {
//       if (t[pT] === "#") {
//         spacesT++;
//         pT--;
//       } else if (spacesT > 0) {
//         spacesT--;
//         pT--;
//       } else break;
//     }

//     if (pS >= 0 && pT >= 0 && s[pS] !== t[pT]) return false;
//     if (pS >= 0 !== pT >= 0) return false;
//     pS--;
//     pT--;
//   }

//   return true;
// };
