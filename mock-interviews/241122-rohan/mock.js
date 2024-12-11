/*
There is a popular blog that uses the following url scheme when it publishes posts, making each
post accessible by an auto-incrementing integer ID: blog.com/page/1, blog.com/page/2,
blog.com/page/3 etc.
However, supposedly for SEO purposes, the blog frequently unpublishes old posts and republishes
them with a much newer post ID. For example, blog.com/page/32 might be rendered void, and
redirect to blog.com/page/18273.
The blog has an API which allows you to fetch the lowest 100 valid page IDs given a set of
comparison filters. Assume you have access to a function `getPageIDs(filters: string[]): int[]`
which returns the set of currently-valid page IDs on the blog matching all the filters. Each
of the filters is a string like "!=4" or ">6".
Your task is to use this function `getPageIDs(filters: string[]): int[]` to find a way to
return a list of all currently-valid page IDs on the blog.

No longer going to return page IDs which have been deprecated.

Blog might have 10,000. 

We want to know all the valid IDs right now.
>> Filter may be handy for grabbing the rest of the articles

Return ALL, not just earliest 100

We want to write a function that's called getAllPageIds() - no argument >> returns array of integers

- Can assume returned in asc order of ID
- getPageIDs returns emtpy array when no further articles exist

APPROACH
keep track of current latest ID we have
store IDs we get back
criteria for stopping
*/

// function getAllPageIds() {
//   let allPageIds = [];
//   let mostRecentReturnedIds = [];
//   let latestId = 0;

//   // TO DO: pass in latest ID with filter
//   mostRecentReturnedIds = getPageIDs();

//   while (mostRecentReturnedIds.length === 100) {
//     allPageIds = [...allPageIds, ...mostRecentReturnedIds];
//     latestId =
//       mostRecentReturnedIds.length === 0 ? mostRecentReturnedIds : 
//       mostRecentReturnedIds[mostRecentReturnedIds.length - 1];
//     const filter = `>${latestId}`;
//     mostRecentReturnedIds = getPageIDs(filter);
//   }

//   return allPageIds.length === 0 ? mostRecentReturnedIds : allPageIds
// }

function getAllPageIds() {
  let allPageIds = [];
  let mostRecentReturnedIds = getPageIDs();
  allPageIds = allPageIds.concat(mostRecentReturnedIds);
  let latestId = -Infinity; // to account for potnetially negative ints / hostile inputs

  while (mostRecentReturnedIds.length === 100) {
    latestId = mostRecentReturnedIds[mostRecentReturnedIds.length - 1] || latestId;
    mostRecentReturnedIds = getPageIDs([`>${latestId}`]);
    allPageIds = allPageIds.concat(mostRecentReturnedIds)
  }

  return allPageIds;
}


function getAllPageIds() {
  let allPageIds = [];
  let mostRecentReturnedIds = getPageIDs();
  allPageIds = allPageIds.concat(mostRecentReturnedIds);
  let latestId = -Infinity; // to account for potnetially negative ints / hostile inputs

  while (mostRecentReturnedIds.length === 100) { // next node is not null
    latestId = mostRecentReturnedIds[mostRecentReturnedIds.length - 1] || largestId; // pointer to next node
    mostRecentReturnedIds = getPageIDs([`>${latestId}`]);
  }

  return allPageIds;
}

// If there are n valid pages how many calls would I make to getPageIDs
// n / 100 times

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
[6, 8, 10, 12,14,16,17, 550, 10285] 
                     p  q

getAllPageIds(['>17', '<550'])

[56, 57, 58, ..300, 499]
                 p  q

  getAllPageIds(['>55', '<10285'])
    // well what do I do with that?

  // currentLargest
  // currentSmallest
  // getAllPageIds([>currentSmalles, <currentLargest])
  
  // - probe the gaps

// create long filter
// constraint: time taken to run is propertional to number of filters we pass

[1, 50..99] // 2-49?

// follow-up would be - how many calls to helper function is this going to take

first call has no filters

1 -           1000
  20, 50, 70
 /   |    |     \
2-19 21-49 51-69 71 - 999
            /   |    |     \


    // when testing, try to be systematic
// [
  // return is empty? [x]
  // return is length 100? [x]
  // return is in between those two? [x]
// ]



    
    
const getAllNumbers = (min=-Infinity, max=Infinity) => {
  
}
/** */



/*

*/
