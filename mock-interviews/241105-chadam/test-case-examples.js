const findLargestValInArray = arr => {
  if (!arr.length) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  const last = arr.pop();
  if (last < 0) {
    return 30;
  }
  return last;
};

const testCases = [
  [[1, 4, 2], 4],
  [[1], 1],
  [[1, 4, 4], 4],
  [[-1, -4, -400, -5], -1],
  [[-1, -4, -400, -500], -1],
  [[-500, -4, -400, -5], -1],
  [],
  0,
];

for (let i = 0; i < testCases.length; i++) {
  console.log("Test Case ", i + 1);
  const [input, expected] = testCases[i];
  console.log("inpuut = ", input);
  const actual = findLargestValInArray(input);
  console.log(expected === actual ? "PASS" : "FAIL");

  console.log("expected = ", expected);
  console.log("actual = ", actual);
}
