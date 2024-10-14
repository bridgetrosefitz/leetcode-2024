function dailyTemperatures(t) {
  const res = Array(t.length).fill(0);
  const stack = [];

  for (let i = 0; i < t.length; i++) {
    while (stack.length && t[stack[stack.length - 1]] < t[i]) {
      const prevDayIndex = stack.pop();
      res[prevDayIndex] = i - prevDayIndex;
    }

    stack.push(i);
  }

  return res;
}
