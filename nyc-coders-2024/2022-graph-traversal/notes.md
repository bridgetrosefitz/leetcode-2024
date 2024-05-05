BFS

- First, go to all nodes which can be directly reached from the starting node (sometimes called the source node)
- Nodes are given a level based on how many edges removed from the source node they are
- Instead of storing {node1: true / false} in an object to keep track of if you've visited a node, you can just use a set
- When you're modelling a graph, you don't want duplicate data
- BFS is exploring node levels one by one, a level being level of closeness to the starting node. You explore the data structure by going to the nearest neighbors first
- The order in the lists of node neighbours does not matter. So the order in which you traverse them does not matter. The order in which you traverse levels matters, though
- In some matrix questions, you use a graph. Each cell represents a vertex. You will be told what represents a neighbor (e.g. up/down/left/right/diagonal)
