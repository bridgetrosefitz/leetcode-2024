function isValid(s) {
  const lookup = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const closing = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (lookup.hasOwnProperty(curr)) {
      closing.push(lookup[curr]);
    } else if (closing.pop() === curr) {
      continue;
    } else {
      return false;
    }
  }

  return closing.length === 0;
}

const tests = [
  ["()", true],
  ["())", false],
  ["(()", false],
  ["(", false],
  [")", false],
  ["({})", true],
  ["(){}", true],
  ["{[]}()", true],
];

for (const [input, expected] of tests) {
  let res = isValid(input);
  if (res !== expected) {
    console.log(
      `FAILED - input ${JSON.stringify(
        input
      )}, expected ${expected}, actual ${res}`
    );
  } else {
    console.log(`PASSED - ${JSON.stringify(input)}`);
  }
}

// "()", true
// "())", false
// "(()", false
// "(", false
// ")", false
// "({})", true
// "(){}", true
// "{[]}()", true
