/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

var intervalIntersection = function(firstList, secondList) {
    if(!firstList.length || !secondList.length) return []
    // Ex 1
    // ---     ------     -----------  --
    //   ------    -----     ----------  ---

    // ----   ---
    // ---- ----

    // pointers for list1 and list2
    let firstListIndex = 0
    let secondListIndex = 0
    const res = []

    while(firstListIndex < firstList.length && secondListIndex < secondList.length) {
        const firstInterval = firstList[firstListIndex]
        const secondInterval = secondList[secondListIndex]
        const maxStart = Math.max(firstInterval[0], secondInterval[0])
        const minEnd = Math.min(firstInterval[1], secondInterval[1])
        if(maxStart <= minEnd) {
            const overlap = [maxStart, minEnd]
            res.push(overlap)
        }

        if(firstInterval[1] === minEnd) {
            firstListIndex++
        } else {
            secondListIndex++
        }
    }

    return res

    // while loop for while both have not reached the end (aka stop when one has reached)

    // test if there is overlap between interval at pointer 1 and 2 (if max of starts is less than or equal to min of ends)
    // TO DO - CHECK I'VE COVERED "EQUAL TO" - DONE

        // if so, 
            // add overlap to res (overlap is [Max of starts, Min of ends])
    
    // increment the pointer with min end value // TO DO - CHECK THIS - DONE
        // TO DO - CHECK THAT POINTER MOVING IS OK IN CASE WHERE INTERVALS ARE IDENTICAL

};