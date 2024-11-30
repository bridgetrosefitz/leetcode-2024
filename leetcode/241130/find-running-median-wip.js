"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'runningMedian' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function runningMedian(a) {
  // Write your code here

  // PROBLEM RECAP
  // for each integer in a
  // print the running median on a new line
  // store the running median in an array

  // [12, 4, 5, 3, 8, 7]
  //         |
  // [3, 4, 5, 7, 8, 12]
  //

  // {
  //     12: 5,
  //     4: 1,
  //     5: 2,
  //     3: 0,
  //     8:4,
  //     7: 3
  // }

  // const medians = [12.0, 8.0]

  // for odd numbers, median = number at floor i / 2 index
  // for even numbers, median = (number at floor i / 2 index + next number) / 2

  const aSorted = [...a].sort();

  const medians = [];
  const sortedItems = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      const index1 = Math.floor(i / 2);
      const index2 = index1 + 1;
      const median = (sortedItems[index1] + sortedItems[index2]) / 2;
      console.log(median.toFixed(1));
      medians.push(median);
    } else {
      const medianIndex = Math.floor(i / 2);
      const median = sortedItems[medianIndex];
      console.log(median.toFixed(1));
      medians.push(median);
    }
  }

  return medians;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const aCount = parseInt(readLine().trim(), 10);

  let a = [];

  for (let i = 0; i < aCount; i++) {
    const aItem = parseInt(readLine().trim(), 10);
    a.push(aItem);
  }

  const result = runningMedian(a);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
