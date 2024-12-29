function myCallback() {
  console.log("hi");
}

let timeout;

// debounce for specific function with specific delay
function debounce1() {
  clearTimeout(timeout);

  timeout = setTimeout(() => myFunction(), 1000);
}

debounce1();

// reusable debounce for different cb and delay
function debounce2(cb, delay = 1000) {
  clearTimeout(timeout);

  timeout = setTimeout(cb, delay);
}

debounce2(myCallback, 500);

// timeout not saved in global scope

function debounceMaker1() {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(myFunction, 1000);
  };
}

const debounceMaker1Instance = debounceMaker1();
debounceMaker1Instance();

// same, but reusable for different cb and delay

function debounceMaker2(cb, delay = 1000) {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}

const debounceMaker2Instance = debounceMaker2(myFunction, 500);
debounceMaker2Instance();

// same, but allowing custom args

function debounceMaker3(cb, delay = 1000) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(cb(...arguments), delay);
  };
}
