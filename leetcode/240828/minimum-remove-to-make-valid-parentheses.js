function minRemoveToMakeValid(s) {
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
}
