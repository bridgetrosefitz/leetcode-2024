var removeDuplicates = function (s) {
  // what would be the time complexity of brute force on this? O(n2)?
  // have to keep reiterating with resulting string
  // unshift on array every time (unless we create a second string - O(n) space)

  // iterate left to right
  // if new letter is same as top letter in stack, pop off prev letter and continue
  // add letter to stack
  // return concatenated string from stack
  const stack = [];
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
      continue;
    }

    stack.push(ch);
  }

  return stack.join("");
};
