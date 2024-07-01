/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let temp = "";
  const happyStrings = [];

  function backtrack() {
    if (temp.length === n) {
      happyStrings.push(temp);
      return;
    }

    if (temp[temp.length - 1] !== "a") {
      temp += "a";
      backtrack();
      temp = temp.slice(0, temp.length - 1);
    }

    if (temp[temp.length - 1] !== "b") {
      temp += "b";
      backtrack();
      temp = temp.slice(0, temp.length - 1);
    }

    if (temp[temp.length - 1] !== "c") {
      temp += "c";
      backtrack();
      temp = temp.slice(0, temp.length - 1);
    }
  }

  backtrack();

  return happyStrings[k - 1] || "";
};
