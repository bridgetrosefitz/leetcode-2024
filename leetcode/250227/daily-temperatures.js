/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const ans = new Array(temperatures.length).fill(0);
  const stack = []; // strictly decreasing, left to right
  // iterate across temps
  // while top of stack is less than temp at el
  // pop and fill in diff at index
  // push curr onto stack (with index)
  // cleanup

  // [73,75,71,69,72,76]
  // [1,4,2,1,1,0]

  // stack = [[90,2]]
  // [30,60,90]
  //   ^
  // [1,1,0]
  // ans = [1,1,0]
  for (let i = 0; i < temperatures.length; i++) {
    const currTemp = temperatures[i]; // 30 60 90
    while (stack.length && temperatures[stack.at(-1)] < currTemp) {
      const indexToUpdate = stack.pop(); // 0 1
      const daysDiff = i - indexToUpdate; // 1 1
      ans[indexToUpdate] = daysDiff;
    }

    stack.push(i);
  }

  return ans;
};
