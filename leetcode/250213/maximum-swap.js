/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  // find the biggest number and put it at the front
  // 109 > 901
  // 219 > 912
  // 100090 > 900010
  let stringNum = num + "";
  let max = parseInt(stringNum[0]);
  let maxIndex = 0;
  for (let i = 1; i < stringNum.length; i++) {
    const int = parseInt(stringNum[i]);
    if (int >= max) {
      max = int;
      maxIndex = i;
    }
  }

  const stringArr = stringNum.split("");
  if (maxIndex !== 0) {
    // swappy swap slash swaparoo
    [stringArr[0], stringArr[maxIndex]] = [stringArr[maxIndex], stringArr[0]];
  }

  return Number(stringArr.join(""));
};
