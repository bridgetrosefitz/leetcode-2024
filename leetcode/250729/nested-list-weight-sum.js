/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     The result is undefined if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     The result is undefined if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function (nestedList) {
  /*
    [1,[4,[6]]]
    1(1 + 2(4 + (3(6))))
    1(1 + 2(4 + (18)))
    1(1 + 2(4 + (18)))
    1 + 8 + 18
    
    // track depth, starting at 1
    // for each element, if it is not an integer, recurse with depth + 1
    // multiply the other elements by depth
    // add each el to sum for level and return that sum
    
    */

  function recurse(arr, depth) {
    /*
        
        [1,[4,[6]]]

        r(3) sum = 18
        r(2) sum = 8 + 18
        r(1) sum = 1 + 26
        
        */
    //     let sum = 0

    //     for(const el of arr) {
    //         if(typeof(el) === 'number') {
    //             sum += depth * el
    //         } else {
    //             sum += recurse(el, depth + 1)
    //         }
    //     }

    //     return sum
    // }

    let sum = 0;

    for (const el of arr) {
      if (el.isInteger()) {
        sum += depth * el.getInteger();
      } else {
        sum += recurse(el.getList(), depth + 1);
      }
    }

    return sum;
  }

  return recurse(nestedList, 1);
};
