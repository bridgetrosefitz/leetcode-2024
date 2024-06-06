/**
 * @param {number} num
 * @return {number}
 */

/*

 */

var numberOfSteps = function (num) {
  function reduce(curr) {
    if (curr === 0) return 0;

    if (curr % 2 === 0) {
      return reduce(curr / 2) + 1;
    } else {
      return reduce(curr - 1) + 1;
    }
  }

  return reduce(num);
};
