var generateParenthesis = function (n) {
  const res = [];
  const temp = [];
  let numOpening = 0;
  let numClosing = 0;

  function backtrack() {
    if (temp.length === 2 * n) {
      res.push([...temp]);
      return;
    }

    if (isValid("(")) {
      temp.push("(");
      numOpening++;
      backtrack();
      temp.pop();
      numOpening--;
    }

    if (isValid(")")) {
      temp.push(")");
      numClosing++;
      backtrack();
      temp.pop();
      numClosing--;
    }
  }

  function isValid(ch) {
    if (ch === "(") {
      if (numOpening >= n) return false;
    }

    if (ch === ")") {
      if (numClosing === numOpening) return false;
    }

    return true;
  }

  backtrack();

  return res.map(combo => combo.join(""));
};
