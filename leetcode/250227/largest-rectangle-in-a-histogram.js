/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
        // 0 1 2 3 4 5
    // [2,1,5,6,2,3]
        // L
        //           R

        //  max = 6
    
        // 0 1 2 3  
    // [2,5,6,9]
        // L
        //       R
        // max = 6



    let left = 0
    let right = heights.length - 1

    let max = -Infinity

    // while(left <= right) {
    //     const height = Math.min(heights[left], heights[right])
    //     const width = right - left + 1
    //     const capacity = height * width
    //     max = Math.max(max, capacity)
    //     if(right > left) {
    //         left++
    //     } else {
    //         right--
    //     }
    // }

    // return max

        0 1 2 3 4 5
    // [2,1,5,6,2,3]
            // L
            //   R

    const queue = [[5,2]] // everything in the middle should be equal or greater than edges
    let max = -Infinity

    while(/*condition*/) {

    }

    return max

    //     0 1 2 3 4
    // // [4,2,1,5,6,]
    //           L
    //             R
    //     [[5,3]] // strictly increasing

    //  [2,1,2]




};