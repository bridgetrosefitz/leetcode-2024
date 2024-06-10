function isPowerOfThree(n) {
  function helper(curr) {
    if (curr === 0) return true;
    if (curr > 0 && curr < 1) return false;
    if (!helper(curr / 3)) return false;
    return true;
  }

  return helper(n);
}
