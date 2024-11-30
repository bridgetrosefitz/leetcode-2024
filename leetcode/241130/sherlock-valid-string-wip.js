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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
  // abcdefghhgfedecba
  const counts = {};

  for (const ch of s) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  const countValues = Object.values(counts);

  const countBuckets = {};

  for (let i = 0; i < countValues.length; i++) {
    const val = countValues[i];
    countBuckets[val] = (countBuckets[val] || 0) + 1;
  }

  if (Object.keys(countBuckets).length > 2) {
    return "NO";
  }

  const bucketVals = Object.values(countBuckets);
  const bucketKeys = Object.keys(countBuckets);

  if (bucketVals[0] > 1 && bucketVals[1] > 1) {
    return "NO";
  }

  if (Math.abs(bucketKeys[0] - bucketKeys[1]) > 1) {
    return "NO";
  }

  return "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = isValid(s);

  ws.write(result + "\n");

  ws.end();
}
