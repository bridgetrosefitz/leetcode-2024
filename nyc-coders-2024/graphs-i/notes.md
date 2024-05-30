- The way you represent your graph changes the time complexity of certain operations
- Graphs are widely used in the industry, so it's really important to understand the common prepresentations

Linear DS, e.g. arrays

- Linear. A linear ds is limited to where you can go as you traverse, and has a defined start and end (e.g. array)
- No relationships between the elements. If you modify one element, it doesn't affect the other elements in any way

Non-linear data structures, E.g. hashmaps

- No defined start or end. The key-value pairs coudl be in different positions because there is no concept of position in a map
- No relationship between the keys

Trees

- Non-linear. You can go from start to end in different ways. There is no correct one way to go through the DS
- Parent-child relationship

Graphs

- Provides the most flexibility for defining relationships
- Allow you to model lots of different relationships. This is why they are so popular across the industry
- Non-linear data structure. You can start anywhere and end anywhere
- Formal definition: a non-linear data structure made up of a finite set of vertices connected by a set of edges.
- finite: You can't define relationships infinitely... e.g. if new users join it becomes finite again. You're not counting all the possible users who could join, you work with how many people are available right now. If a new user joins you add them to the set
- A PATH is the vertices you went through to get from start to end
- A DEGREE of a vertex is the number of edges that are connected to it
- In-degree means the number of edges that are coming IN to the vertex
- Out-degree means the number of edges going out from a vertex
- In- and out-degree is only used for directed graphs, because in undirected you just have a degree (all edges coming in)
- Two broad categories of graphs: direct and undirected

Undirected

- If you connect 2 vertices, you can go from 1 to 2 as well as 2 to 1. You can go in both directions
- If there is no arrow on an edge, it means it's an undirected edge

Directed

- You define certain directions on your edges. You can't go just anyway
- If there is at least one directed edge, the whole graph is directed
- Certain parts can be undirected, though

Examples of graphs in real world

- Social networks
- Maps, locations
- The internet itself! If you use web crawlers, you might go through sites or products and try to figure out the relationship before you show them to the user

Weighted

- Means there is a cost of moving from one vertex to another
- E.g. in a map, some roads might take longer to move along than another
- There is no defined way to use weights, it depends on the application you're building
- Vertices have a tonne of info that you can use to calculate weights also
- In more advanced algos, you need to understand the weights in order to apply algorithms (e.g. finding the fastest path)

Subcategories of graph

- Trees
- Rooted trees
- DAG

Self loop

- A vertex has an edge to itself

Parallel edges

- You can have two edges connecting the same vertices

Edge list

- Doesn't tell you anything about the connection, it is an undirected pair
- Doesn't have to be ordered

Matrix

e.g. [[0, 1, 2]. [3, 4, 5], [6, 7, 8]]

- Matrices are arrays of arrays

Adjacency matrix

- You define a matrix where the rows and columns both have the vertex number
- For graph algos, you generally want to get the neighbors of that vertex. So it's important to model graphs in such a way that it's easy to get the neighbors / figure out where the vertex goes to
- Takes up a lot of space
- In the diagonal down the middle, you will have 0s unless you're working with self loops
- You have to recreate the array from scratch when using fixed size array

Adjacency lists

- Can be just an array, or a map
- In the map version, the keys represent the vertices (u), the values represent the other vertices you're connecting to (v)
- If a vertex is in the neighbor set of another vertex, and vice versa, the edge is undirected
- An array of neighbors could be a linked list, stack, anything else
- Generally, when you work on graphs your nodes will have more info than just numbers or letters (e.g. user1 = {name: XX, favColor: XX} ). You could make a lookup to see what that index actually refers to.
- If the graph is directed, you only add the edge into one of the two keys
- If you're removing a vertex, you have to remove all the references to that vertex before you can safely remove the vertex ... WHY DOES THAT ORDER HAVE TO EXIST? WHAT ERROR WILL YOU GET?
- You should use removeEdge method in removeVertex

Questions

- How are matrices graphs??
- How do matrices show connections between nodes?
- How do you represent directed edges in an adjacency matrix
- Are there two ways to represent adjacency lists? I thought an adj list was represented as a map?
- How would you change the way you represent a graph traverse when an edge is weighted
- Also, how often does weighted graph traversal show up in interviews? I haven’t seen any weighted graph Qs in the Leetcode questions
- If you want to see all nodes connected to another node, is your only choice to use an adjacency list? Sometimes when given an edge list in a problem, I have had to >> you often have to convert or work with it
- DONE Sometimes there is an order . I just did a leetcode problem where they represented a graph by showing an array of neighbors at each index, with the index representing a node. What type of graph representation would that be?
