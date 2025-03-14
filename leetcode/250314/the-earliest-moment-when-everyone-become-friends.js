/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  /*
 
 [
    [20190101,0,1],
    [20190104,3,4],
    [20190107,2,3],
    [20190211,1,5],
    [20190224,2,4],
    [20190301,0,3],
    [20190312,1,2],
    [20190322,4,5]]

    ]
[
    [1,1,2]
    [2,1,3]
]

// figure out when graph has one component
// you have n components at the start
// at each element, two people become friends
// 1: {2, 3, 1} 2: {1, 2} 3: {1,2,3}
// as soon as anyone's set of acquaintances is size n, you know everyone is acquainted > but you're copying / merging which could be n2 >> there is redundancy in storage (same info stored in multiple places)
// acquaintance is 'transitive' (if a is friends with b and b is friends with c, a is also 'friends' / acquaintance with c)

// when two people become friends, their components should just merge
 */

  // [[101,0,1],[104,3,4],[107,2,3],[211,1,5],[224,2,4],[301,0,3],[312,1,2],[322,4,5]]
  //  ^
  // groups = [0,0,2,2,2,0,6]
  const groups = new Array(n).fill(0).map((_, i) => i);
  // LOGS
  // [T0, 1,2]
  // [T1, 2,0]

  // GROUPS
  // [0,1,2]
  //   ^ ^
  // INDEX IS PERSON, EL IS GROUP
  // [0,1,2]
  let merges = 0; // 1 2 3 4

  logs.sort((a, b) => a[0] - b[0]);

  const find = x => {
    if (groups[x] !== x) {
      groups[x] = find(groups[x]);
    }
    return groups[x];
  };

  function union(a, b) {
    const aGroup = find(a); // 1
    const bGroup = find(b); // 2

    if (aGroup !== bGroup) {
      // *.    index   0.  1   2
      // * union arr [ 0,  0,  0 ]
      groups[bGroup] = aGroup; // WHYYYYYY
      merges++;
    }
  }

  for (const [timestamp, a, b] of logs) {
    union(a, b);
    if (merges === n - 1) {
      return timestamp;
    }
  }

  return -1;
};
