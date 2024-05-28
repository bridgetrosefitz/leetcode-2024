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
- Two broad categories of graphs: direct and undirected

Undirected

Examples of graphs in real world

- Social networks
- Maps, locations
- The internet itself! If you use web crawlers, you might go through sites or products and try to figure out the relationship before you show them to the user
