function removeDuplicates(s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
      continue;
    }

    stack.push(ch);
  }

  return stack.join("");
}
