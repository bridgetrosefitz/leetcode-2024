const multiply = function (x) {
  return function (y) {
    debugger;
    console.log(x * y);
  };
};

const multiplyByTwo = multiply(2);
