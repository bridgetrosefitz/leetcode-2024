- similarities between LL and array: they are both a sequence of ordered elements. There is a defined start and end
- LL is nothing but objects connected together, You just have a value in the object, and a way to reference another object (node)
- in RAM, LL nodes don't have to be next to each other

Properties of a stack

- Elements are ordered
- You can put in as many elements as you want (as long as you have the memory for it)
- LIFO / FILO element access order

- Peek lets you look at the top element of the stack without removing it
- A stack can be implemented using either an array or LL
- the simplest array structure available to the computer is fixed size, but a stack needs to be able to grow
- You have to use a dynamic array if you're buildin a stack. This is already the case with JS
- Discuss this with your interviewer when talking about the implications of using an array as a stack

- When building a stack with nodes, you always add and remove from the head. That gives you instant access. Both push and pop must be O(1). Because in a LL you always have the head reference, you can always add and remove
- When creating a stack class, the bare minimum properties you need is head and size
- Certain problems require the size value of the stack (e.g. valid parentheses, if it's an odd number, it's not valid)
- In a monotonic stack, you maintain additional properties

QUEUES

- METHODS: enqueue, dequeue / pop (dequeue is more general), peek, size, isEmpty
- In python you can use popleft...
- FIFO
- A priority queue is a heap. If the priority is of concern, you wouldn't use this queue
- You can also use an array or linked list to implement. But either enqueue or dequeue will be O(n)
- You can't use arrays to implement efficient queues. Because removing something is O(n), because you have to move all values to remove the empty space
- WHen you're adding, you add to the tail, when you dequeue, you remove from the head
- If you have any references to an object, it won't get removed from memory!

QUEUE PROPERTIES

- ordered elements
- not fixed size
- FIFO

Questions

- What are the benefits of using a stack data structure compare to an array?
  > > all the DS we will see will be built using arrays and / or nodes. The benefit comes from the properties of the DS because you constrain ho wit will be used. With a stack the main property you care about is LIFO / FILO. This is helpful because in certain scenarios, this is exactly what you want. E.g. undo / redo
  > > the reson for having so many DS is to put constraints on them, so the intention for how you should use them is clear
- How many different types of stacks are there?
