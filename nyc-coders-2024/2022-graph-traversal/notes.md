BFS

- First, go to all nodes which can be directly reached from the starting node (sometimes called the source node)
- Nodes are given a level based on how many edges removed from the source node they are
- Instead of storing {node1: true / false} in an object to keep track of if you've visited a node, you can just use a set
- When you're modelling a graph, you don't want duplicate data
