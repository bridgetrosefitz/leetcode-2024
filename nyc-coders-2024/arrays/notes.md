- Everything you write in software has to be processed in hardware
- Different storage devices have different performances in terms of speed
  -- RAM is orders of magnitude faster than storage
  -- It would be difficult to run software
- CPU only processes instructions
- CPU itself has layers of cache / temporary storage

- Assumptions for this CPU / RAM Model of Computation
  -- Unlimited RAM space. This is a simplification - noone has unlimited RAM. The reason we do this is so we can assume we can work with data that does'nt fit in memory
  -- Data access or write takes O(1) operation
  -- Simple operations can be counted as 1 unit of operation O(1) (+, -, \*, /, variable declaration, defining a function)
  -- Loops and function calls are not simple operations

  - Any object you create will be stored in RAM

ARRAYS

- Contiguous in memory
  -- The location of the first element is stored in an array. Initially you can only jump to the first element of the array. Your computer goes to there, then gets the element two steps from this
  -- Reading from memory wouldn't be as fast if arrays weren't contiguous
- An array is a list of indexes.
  -- The fact that there is an index associated with each element is a crucial part of an array
- Mutable (e.g. arr[2] = 'd')
- A static array is fixed size
  -- You can set a null at an index, but it will still take up space
- A dynamic array is dynamic size / resizeable

- Any programming language you use will have static arrays - it is a foundational structure. Dynamic arrays are built on top of static arrays
- If you use push or pop in your language, you are probably using a dynamic array
- Generally when an array resizes with pushing one element, you won't just find a new spot with one more, it will likely double it

TIME COMPLEXITY

- Number of operations with respect to the input size, in the worst case
- In a function, the first operation will be assigning arguments to variables (this is called implicit assignment)
- When you call, it has to look up the variable, which is another operation
- Input size refers to the magnitude of the value (e.g. 100 is bigger than 10)

QUESTIONS

- DONE When would accessing RAM not take O(1)?
  -- A lot happens in computer hardware. Sometimes when you're trying to access info, it could be in CPU cache not RAM itself. Sometimes you try to access the RAM and it might not be there
- Are arrays slower in JS because they're implemented as objects?
- Does it ever downsize the memory space
- How does it find / know where empty spaces are
- DONE What if something you want to store at one index is massive and doesn't fit in the space reserved for data at that index?
- garbage collection
- does the lookup time complexity for implicit variables increase for different data structures
