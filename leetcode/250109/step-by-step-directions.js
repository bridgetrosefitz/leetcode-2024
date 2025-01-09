/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  /*

                    5
                1       2
            3       6       4

            []
            - BFS (detrmining steps from levels / index in q?)
            - DFS (LCA is shortest path?)
                - vertical distance
                - horizontal distance

            - find the LCA
            - recuisvely search for start and end and build string, using preorder
                - go back to LCA, then begin search
                - keep track of if we find start first
                - once we've found one of either node, append to string with steps back to LCA

    
    Inputs: 
    - type, length, hostile
    - root of binary tree 
        - regular node class
        - all unique values
        - at least 2 nodes in tree
    - value of start (int)
    - value of end (int)

    Output:
    - string, U / R / L - uppercase alpha ch

    */
};
