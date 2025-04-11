function generateParentheses(n) {
  // n = 2 // countOpening = 0 1 2
  const res = []; // ["(())","()()"]
  const temp = []; // []
  // let numRemaining = 0 // 0 1 2 1

  function buildString(countOpening, countClosing) {
    if (n === 0) {
      return [];
    }
    // base case
    if (temp.length >= 2 * n) {
      res.push(temp.join(""));
      return;
    }

    // add option, with check
    // open first
    // close second
    if (countOpening < n) {
      temp.push("(");
      buildString(countOpening + 1, countClosing);
      temp.pop();
    }

    if (countOpening > 0 && countOpening > countClosing) {
      temp.push(")");
      buildString(countOpening, countClosing + 1);
      temp.pop();
    }

    // recruisvely call
    // remove option
  }

  buildString(0, 0);

  return res;
}

const tests = [0, 1, 2];
const expected = [[], ["()"], ["(())", "()()"]]; // CHECK IF INCLUDES AND IS SAME LENGTH OR BE SURE TO WRITE THE OUTPUT ITEMS IN ORDER

for (let i = 0; i < tests.length; i++) {
  const test = tests[i];
  const res = generateParentheses(test);
  if (JSON.stringify(res) !== JSON.stringify(expected[i])) {
    console.log(
      "FAILED",
      "test case ",
      test,
      "actual ",
      res,
      "expected",
      expected[i]
    );
  } else {
    console.log("PASSED");
  }
}
