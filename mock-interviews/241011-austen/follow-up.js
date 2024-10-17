function minMovesToValidate(s) {
  if (!s.length) return 0;
  let moves = 0;
  let openBracketsCount = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(") {
      openBracketsCount += 1;
    } else {
      if (openBracketsCount > 0) {
        openBracketsCount -= 1;
      } else {
        moves += 1;
      }
    }
  }
  moves += openBracketsCount;

  return moves;
}

function minMovesToValidate(s) {
  if (!s.length) return 0;
  let counter = 0;
  const stack = []; // 1 // 0

  // iterate over string left to right from 0
  // if ch is an open bracket
  // add to stack
  // else
  // if stack.length > 0
  // pop off stack
  // else
  // increment counter

  // add length of stack to counter

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(") {
      stack.push("(");
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        counter += 1;
      }
    }
  }

  counter += stack.length;

  return counter;
}
