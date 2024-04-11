NYC Coders

Downward arrows show recursive calls,
Upward arrows show return statements

Backtracking: process of making decisions with your code. You have to figure out what your options are, and then choose them

In BT, we make choices. E.g.include or exclude, but not always. For certain problems you have to include different things, you might have multiple inclusions / exclusions

We want to make a decision with an element and keep track of the decision. when you use an array, you add or remove

Every recursive call you make is a decision

Pop(), to undo a decision, when you go back up.

What are the decisions you should make
What is your initial state
How do you change your state to converge to base case

If you are working with a string, you don’t have to do append and pop, because you’re already crating a new copy of the string

Figure out what decision you’re making, and what states need to be changed

In permutations, may need to use a Set

TO DO: Watch previous backtracking lecture to learn time complexity

SHARPEN THE AXE

Q: what is ’BT’ vs ‘recursion’
Q: path = array?
— is a path a representation of the result of the decision made at each recursive call? a.k.a. each
Q: should you return something rather than just return
