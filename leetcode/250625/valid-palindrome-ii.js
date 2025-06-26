/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const check = (l, r) => {
    /*
    
    "abbca"
      L
        R
       L
        R
    "abbcza"
    "azbbca"

    
    check(2,3)
    

    */
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return check(l + 1, r) || check(l, r - 1);
    }
    r--;
    l++;
  }

  return true;
};
