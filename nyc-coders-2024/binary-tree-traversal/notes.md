- linear data structures are linear because they have a defined start and end
- a tree is a collection of nodes that are linked together
- whenever you have an equals sign (assignment), the right hand side gets evaluated first and then gets assigned to the left
- when you go down a tree, you end up at a node that is not pointing to anything. This is called a leaf node
- Terminology
  -- Level (root is level 0, then onwards. Think about a collection of nodes that share the same level property, as opposed to depth where you're usually thinking of a specific node)
  -- Depth (number of links you need to go from the root to a specific node. That node has a depth, defined by the number of links you need to get there)
  -- Height (the number of jumps to reach the furthest leaf node. The height of a tree is the height of the root node)
  -- Path (always start at the root. There is not one way to traverse a tree, so if you start at the root, you can have different paths, depending on what nodes you go to)

TRAVERSAL

- A way to look at every single node at least once
- BFS: Order is left to right, top to bottom. It's level by level
- IMPORTANT: You have to use a variable to store the size of the queue when you enter each new level

PROPERTIES OF BINARY TREE

- non linear, there is no one way to go through the tree structure
- hierarchical, there is a parent-child relationship between nodes. Trees are usually used to represent some sort of hierarchical structure such as a file system
- acyclic, you can't go from a child node to a parent node through a direct connection. The only way to go from a child to a parent is through traversal from root
- recursive structure, if you have a tree, and you take a portion of a tree, it is also a tree. Larger trees are formed out of smaller trees

- You usually use a for loop when you know how many times you have to do something. We use while loops when we're not sure how many times we'll have to run it
- Find a library of data structure implementations during the interview. In an interview, you can just copy over the code and use it if you want
- Level-order traversal is BFS

- THe for-loop runs as many times as there are elements in the queue. Aka for each level

DFS

- The only way to go from a child to a parent is through a return statement
- EACH NODE IS ACCESSED THREE TIMES
- Sometimes you have to pass information to your children - you do that when you go to your children; when you return from a child, you can pass information up to the parent; when you are at the third access, you can have information from BOTH children

In order: BETWEEN two traversals. If you need to do something with the left side of the tree, this is when you get access to that information. Once you're back from the left subtree, you can store information

- Postorder: after you've come back from your right subtree. When you come back from the right child, you can compare to left. You would do that after you've visited both

- CORE IDEA OF DFS - you get access to children. The only way a child can send information back to the parent is through a return statement!!!

- In postorder traversal, the root value is at the end

- Think about what information you need and on what access you get that

- Pros and cons of ; recursive calls aren't free, so if you're problem requires a lot of calls, your stack will overflow. E.g. a drawing program required accesisng millions of cells and the stack can't handle that >> think about the problem recursively, then convert it to iterative

- Big O. Figure out how much each piece of work costs, and multiply it by the number of nodes.

QUESTIONS

- How often do you get non-binary trees in interviews? What are some examples of non-binary trees in real life?
- DONE Is there a rough rule of thumb for when iterative vs recursive is better?
- DONE Implement queue in JS
- How do the matrix graph problems represent graphs? I thought adjacent lists etc were key
- Pre, in, and post still apply for the iterative approach? Is it just harder to “see” when the work gets done perhaps?
