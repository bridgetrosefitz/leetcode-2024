/*
There is a bug in the server. Instead of returning the lowest 100 IDs,
getMatchingIDs returns a nondeterministic subset of 100 IDs on the server that satisfy
the filters provided.
Write a function to fetch all the IDs, minimizing the number of calls to
getMatchingIDs.
*/


[6, 7, 8, 9, 11, 12 ... 10285]

["<5"]

[6, 8, 10, 55, 10285] // in this new world, how do we do this?
[6, 8, 10, 12,14,16,17, 55, 10285] 

cs                            cl
v                             v
[6, 8, 10, 12,14,16,17,20, 550, 10285] 
                     p  q

getAllPageIds(['>17', '<550'])

[56, 57, 58, ..300, 499]
                 p  q

function getAllPageIds() {
  // TO DO handle finding max number (maybe start with Infinity)
  function helper(minId, maxId) {
    // if consecutive or if no new results, return
    if(maxId - minId === 1) {
      return []
    }
    // create filter
    const filter = [`>${minId}`, `<${maxId}`]
    // get results between min and Max
    const res = getPageIds(filter)

    if(res.length <= 1) {
      return res
    }
    // sort results
    res.sort((a,b) => a - b)
    // recurse for every pair of adjacent numbers
    let newRes = []
    for(let i = 0; i < res.length - 1; i++) {
      newRes = newRes.concat((i, 0, ...helper(res[i], res[i + 1])))
    }
    // splice results into pageIds between min and max

    return res

  }

  return helper(-Infinity, Infinity) // [1,3,9]
                                      // [2]
}

/*

[0,10]
[1,1]
[0,2]

*/