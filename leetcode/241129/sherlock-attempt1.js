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
  let diffExists = false;

  for (const ch of s) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  console.log(counts);
  const countValues = Object.values(counts);
  let max = Math.max(...countValues);
  for (let i = 0; i < countValues.length; i++) {
    const count = countValues[i];
    const diff = Math.abs(max - count);
    if (diff > 0) {
      if (diff > 1) {
        console.log("1st");
        return "NO";
      }
      if (diffExists) {
        console.log("2nd");
        return "NO";
      } else {
        diffExists = true;
      }
    }
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
