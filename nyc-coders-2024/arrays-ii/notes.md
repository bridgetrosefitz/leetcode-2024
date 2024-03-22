- Arrays are mutable - mutability is the ability to modify what is stored at each element
- Every time you declare a variable and assign a value to it, it gets stoerd in RAM
- The right side of the equals sign is evaluated first. The computer sees the value and creates a representatino of it in memory
- The variable name gets its own representation
- The variable points to values. Variables always point to a value, they cannot point to other variables
- when you have a variable point to a different value, the representation of 'a' will just be floating around; a representation of 'c' will be created, then vairable will point to it
- In an array, technically, you have the values of an array floating around, and the array will point to those values
- variables must point to other values, they cant point to variables.

Q: DONE What do the variables actually point to?
Q: I think I heard that appending to a string is O(n). Is that related to the idea of primitive string representation?
Q: Evaluating to true / truthy variables

- When you write a new array, it tells the computer that you are creating a new list of items in the array
- when you are assigning primitives to variables, you only have one value for that exact primitive
- String encoding...strings are basically numbers. If there is a unique representation programmed in the computer, it will always use that representation for the next variable
- the main takeaway: be mindful of where your values are. Variables don't point to variables, they only point to values;
- single representation applies to all primitives; objects, classes (and others) are reference types
- in a 2D array, all the arrays are reference types (the outer array is one value; the inner ones are each values too)
- References look different in the computer to values; so computers know to follow that reference instead of taking it as a value
- In some language you have to explicitly specifiy what values are a reference, and value
- When a comp tries to access an index, it will see there is a reference and follow it
- When you're working with 2D arrays, be mindful of mutating the values ... ask your interviewer to see if you can mutate the original input or if you have to copy it

- If you have primivite values, they are passed by value
- Everything is a reference, but for primitives, the thing it references ('a') is the same across everything. You can't mutate it.
- For boolean, there is only two values in memory and all variables that are 'true' point to this. You can't have two things that mean 'true'
- Reference declaration and lookup is O(1); RAM model of computation
- ANy expression

> > data model ; fluent python
