// https://www.youtube.com/watch?v=9T4z98JcHR0

"use strict";

console.log(this);

function beef() {
  console.log("is beef accessible in Window object");
}
// in the global space

console.log(this); // globalObject

// in the global space, this will always have the value of the global object
//JS can run in a smart watch, node, browser; wherever JS runs, there is a JS runtime environment.
// The global object in any of these environments can be different. It depends on where you are running the piece of code.

///////////////////////
// inside a function

console.log("hi kev");
function x() {
  console.log("inside a function", this);
}

x();
console.log("and with a calling object");
window.x();

// if you're in strict mode, the value of this from inside a function will be undefined (as opposed to the global variable)
// to enter strict mode, write "use strict" (in quotations) at the top of the file
// when undefined or null is replaced by the global variable, it is called "this substitution"

///////////////////////
// in strict mode (this substitution)

// in non-strict mode, if the value of this is undefined or null, this will be replaced with the global object

///////////////////////
// value depends on how the function is called (window)

// in strict mode,
// if the function is called without any reference, the value will be undefined
// if you call a function with reference to an object (e.g. window.x(), the this value will be the calling object)

///////////////////////
// inside an object's method

// if an object's method is called, the value of this is the object where the method is present
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

console.log("obj.x()"); // will be the object
obj.x();

///////////////////////

const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "Kevin",
};
// call apply bind methods (sharing methods)
// call allows you to share methods. if you invoke a method on an object but want its this to reference another this, you can pass it in as the argument of call!
// In other words, you can override the value of this
// call/bind/apply are all used to set the value of this inside them

student.printName.call(student2);

///////////////////////
// inside arrow functions

// arrow functions do not have their own this. They take the value of the lexical environment where they are enclosed

const obj2 = {
  a: 10,
  x: () => {
    console.log("arrow functions");
    console.log(this); //this will not be the object; it will be the enclosing lexical context. It will be the global object
  },
};

obj2.x();

const obj3 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log("arrow functions");
      console.log(this); //this will not be the object; it will be the enclosing lexical context. It will be the global object
    };
    y();
  },
};

obj3.x();

// lexical means how the code is written >> enclosing lexical scope means where this function is lexically present in the code

///////////////////////
// inside nested arrow functions

///////////////////////
// inside DOM

// this is a reference to the HTML element

///////////////////////
// inside classes and constructors

//////////////////////////////////////////////EXPERIMENTS//////////////////////////////////////////////

const obj4 = {
  test: "obj4",
  a: function () {
    console.log("a");
    console.log(this); // << this will be obj4

    function b() {
      console.log("b");
      console.log(this); // << in strict mode, this will be undefined; otherwise Window
    }

    b();
  },
};

obj4.a();
