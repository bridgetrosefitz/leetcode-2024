const message = "Hello world"; // Try edit me

// Update header text
document.querySelector("#header").innerHTML = message;

// Log to console
// DIVISION
console.log("division");
console.log(simpleCalculator("4", "2", "/"));
console.log(simpleCalculator("4", "3", "/"));
console.log(simpleCalculator("-1", "3", "/"));
console.log("Infinity", simpleCalculator("1", "0", "/"));

// MULTIPLICATION
console.log("multiplication");
console.log(simpleCalculator("4", "2", "*"));
console.log(simpleCalculator("04", "2", "*"));
console.log(simpleCalculator("4.0", "2", "*"));
console.log(simpleCalculator("-1", "-2", "*"));

// SUBTRACTION
console.log("subtraction");
console.log("2", simpleCalculator("4", "2", "-"));
console.log("6", simpleCalculator("4", "-2", "-"));

// ADDITION
console.log("addition");
console.log(simpleCalculator("4", "2", "+"));

function simpleCalculator(num1, num2, operator) {
  // consider more precise strings returned (TO DO)

  // convert strings to numbers

  // handle num is not a number (e.g. special ch)
  // return NaN

  const num1Processed = parseInt(num1);
  const num2Processed = parseInt(num2);

  const operators = {
    "/": divide,
    "+": add,
    "-": subtract,
    "*": multiply,
  }; // HELPER FUNCTIONS?

  function divide(numerator, denominator) {
    const result = numerator / denominator;
    return result.toString(); // handle decimals
  }

  function multiply(num1, num2) {
    const result = num1 * num2;
    return result.toString();
  }

  function subtract(firstNum, secondNum) {
    const result = firstNum - secondNum;
    return result.toString();
  }

  function add(num1, num2) {
    const result = num1 + num2;
    return result.toString();
  }

  // return result of actual operation
  return operators[operator](num1Processed, num2Processed);
}
