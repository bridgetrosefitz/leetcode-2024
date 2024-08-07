/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // iterate left to right
  // if ch is alpha
  // continue
  // if ch is a closing bracket
  // if top ch on stack is an opening bracket
  // pop off stack
  // else
  // add to stack
  // else (if ch is opening bracket)
  // add to stack

  // if stack is empty, return original string

  // iterate backwards over original string
  // if ch matches top ch in stack, continue
  // else, push ch into ans arr

  // return reversed ans arr

  const stack = [];
  const ans = [];

  for (const ch of s) {
    if (ch.toUpperCase() !== ch.toLowerCase()) continue;
    if (ch === "(") stack.push(ch);
    if (ch === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }

  if (stack.length === 0) return s;

  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (!stack.length || ch !== stack[stack.length - 1]) {
      ans.push(ch);
      continue;
    }

    stack.pop();
  }

  return ans.reverse().join("");
};
