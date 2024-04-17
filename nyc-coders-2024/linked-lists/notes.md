- When you have an = operator, the right side gets evaluated first
- memory locations are NOT integers (but you can use integers for ismplicity)
- dynamic arrays used fixed arrays under the hood
- Array indexing only works when memory addresses are next to eah other. RAM goes to the first index of the array, and it jumps to the Nth index to get the value you want. This only works if the elements are contiguous

LL

- Has a linear structure. One node is after the other, and that is always the order
- A LL streamlines how you work with linked nodes. So you don't need to do head.next.next.next.next
- In python you pass self into the constructor of the class - Alvee can't remember why
- When updating a linked list, you should always consider when the list STARTS or WILL be empty (aka length 0, or 1)
- You can't jump around to do binary search on a linked list! So the standard search on a linked list is iterate over every node

DLL

- In practice, aLl nulls point to the same thing in memory. But it can be helpful to indicate them as pointing to different nulls
- Same concept as SLL, but you have one extra reference
- When just using Nodes, you have to do head.next.prev = head; when using a LL class, you can do tail.prev = newNode
- Removing from tail in a DLL is O(1) whereas it's O(n)in a SLL; it is this way in a SLL because you don't know what the previous node is to the tail to update the new tail
- You need the penultimate node because that is going to be your new tail.
- Sometimes you might use the length property of the linekdlist to know how long to iterate, e.g. in Remove method

Questions

- do nodes have any other properties?
  > > you can add other properties to a node, there is no limit. It depends on the problem you're trying to solve. Generally the LL is the data type that holds other properties that are relevant to the nodes
- What is the easiest way to run a LC LL problem in browser console / other env (like python tutor)
- How common are doubly linked list Qs in interviews compared to singly
- Where in memory is the LINKEDLIST class stored, compared to its nodes
- Can the value of a node be any data type?
  > > Yes.
- So you can have a LL with no nodes
- When you first initialise a LL, does it always have no nodes, then you have to add the nodes afterwards?
  > > some Node classes you'll see in Leetcode allow you to initialise the next pointer when you create a node, not just the value
- Could you share some types of problems where you know it would be efficient to be able to have O(1) tail removal?
  > > E.g. a queue, or a modified queue or stack
