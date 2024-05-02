- Allow you to define a broader set of relationships
- Allows you to encode information in the edges themselves; information about the connection
- Degree of a vertex is the number of edges connected to it
- A cycle is a path with repeated vertices
- In-degree of a vertex: how many arrows coming into a vertex
- out-degree: how many arrows going out of it
- When there is directional information in a graph, it’s called a ‘directed graph’; when there is not, it is called an ‘undirected graph’
- The weight of an edge defines the cost of taking a specific edge between two nodes
- Undirected graphs can also be weighted
- You can have a graph with disconnected vertices (aka no edge links a vertex to other vertices). E.g. in a social network, if you don’t have any friends yet, you’re still part of the graph but you do’t have any connections
- General assumptions:
  - No self loops, aka an edge that leaves one vertex and goes straight back to it
  - No parallel edges (not a multi-graph), aka multiple edges that go in the same direction
- Notation: u is the vertex an edge leaves; v is the vertex an edge goes into. With undirected graphs this doesn’t matter
- “Adjacent” means a vertex that leads directly to another
- Removing an edge from an adjacency list is time complexity O(|V| + |E|), “O of bar V plus bar E”, aka the total number of vertices + total number of edges
- In an adjacency matrix, to store 7 vertices, you need 7\*7 cells (7 rows and 7 columns) becuase your rows are u and your columns are v
- If you have a sparse graph (aka not a high number of edges), there is a lot of wasted space in an adjacency matrix. Every 0 is wasted space, telling you there’s nothing there; in an adjacency LIST, you have only the information you need. Not information you’re not using. You don’t need space to store the absence of a value
- Generally, for most applications, when modelling out a graph, you have sparse graphs - so adjacency lists are more common

TIME COMPLEXITY

- Because arrays are fixed size, when you add a new vertex to an adjacency matrix, if is an O(n2) operation. Because you have to create a new array with one extra slot for every existing vertex
- Removing an edge in an adjacency list is O(deg(u)), aka O “u degrees” / the number of edges coming out of u. Because that is the number of operations you have to do to filter over the whole list of adjacent nodes to remove the relevant one
