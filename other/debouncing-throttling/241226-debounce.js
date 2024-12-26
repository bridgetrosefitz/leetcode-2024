// SIMPLEST VERSION

let timeout;

function debounce() {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("hi"), 500);
}
// how to use:
debounce();

// OR more generic / versatile for any cb and any delay //

let timeout2;

function debounce2(cb, delay = 1000) {
  clearTimeout(timeout2);
  timeout2 = setTimeout(cb, delay);
}
// how to use:
debounce(() => console.log("hi"), 500);

// using a closure

function debounceMaker() {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("hi"), 500);
  };
}
// how to use:
const instanceDebounceMaker = debounceMaker();
instanceDebounceMaker();

// using a closure - more generic / versatile for any cb and any delay

function debounceMaker2() {
  let timeout;

  return (cb, delay = 1000) => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}
// how to use:
const instanceDebounceMaker2 = debounceMaker2();
instanceDebounceMaker2(() => console.log("hi"), 500);

// using a closure w/ fixed callback on definition

function debounceMaker3(cb, delay = 1000) {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}
// how to use:
const instanceDebounceMaker3 = debounceMaker3(() => console.log("hi"), 500);
instanceDebounceMaker3();

// Using a closure w/ fixed callback on definition & custom args

function debounceMaker4(cb, delay = 1000) {
  let timeout;

  return (...poo) => {
    //...poo  is "rest parameters" like how we use "restProps" where we get an array of all remaining args when used at the end of an arguments list
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...poo), delay);
  };
}
// how to use:
const instanceDebounceMaker4 = debounceMaker4(thing => console.log(thing), 500);
instanceDebounceMaker4("thing i want to log");

// how to use with multiple args in the callback function:
const instance2DebounceMaker4 = debonceMaker4(
  (...shitTonneOfArgs) => console.log(...shitTonneOfArgs),
  500
);
instance2DebounceMaker4("thing i want to log", "pee", "fart");
