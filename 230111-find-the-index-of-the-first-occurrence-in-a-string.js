var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  const haystackLength = haystack.length;
  const lastPossibleStart = haystackLength - needleLength;

  for (let windowStart = 0; windowStart <= lastPossibleStart; windowStart++) {
    for (let currentChar = 0; currentChar < needleLength; currentChar++) {
      if (needle[currentChar] !== haystack[windowStart + currentChar]) {
        break;
      }

      if (currentChar === needleLength - 1) {
        return windowStart;
      }
    }
  }

  return -1;
};
