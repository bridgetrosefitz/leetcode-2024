/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    // valid tree if
        // we take one neighbor from an adjacency list, and if that neighbor's adjace

    // build an adjacency list (with values as sets)
    // for each node
        // for each neighbor
            // check if there is an intersection between the node and the neighbor's adjacency list
    const adjacencyList = new Map()
    for(const edge of edges) {
            const first = edge[0]
            const second = edge[1]

        if(adjacencyList.has(first)) {
            const neighbors = adjacencyList.get(first)
            neighbors.add(second)
        } else {
            const set = new Set()
            adjacencyList.set(first, set)
            set.add(second)
        }

        if(adjacencyList.has(second)) {
            const neighbors = adjacencyList.get(second)
            neighbors.add(first)
        } else {
            const set = new Set()
            adjacencyList.set(second, set)
            set.add(first)
        }
        
    }

    for(const [node, neighbors] of adjacencyList) {
        for(const neighbor of neighbors) {

            if(adjacencyList)            
            if(!hasIntersection(adjacencyList.get(neighbor), neighbors)) {
                continue
            } else {
                return false
            }
        }

    }
    return true
};

function hasIntersection(set1, set2) {
    for(const item of set1) {
        if(set2.has(item)) {
            return true
        }
    }

    return false
}