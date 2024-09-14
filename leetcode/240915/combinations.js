/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // n = 3
  // k = 2

  // [1, 2], [1,3], [2,3], [1,3]

  // n = 3
  // k = 3

  // [1,2,3]

  // [1]

  const temp = [];
  const res = [];

  /*
    
    temp [1]
    res []
    i = 1
    j = 1

        temp [1, 2]
        res []
        i = 2
        j = 2

            temp [1, 2]
            res [[1,2]]
            i = 
            j = 

        temp [1, 3]
        res [[1,2]]
        i = 2
        j = 3

            temp [1, 3]
            res [[1,2]]
            i = 2
            j = 3

    */

  function backtrack(i) {
    if (temp.length === k) {
      return res.push([...temp]);
    }

    for (let j = i; j <= n; j++) {
      // add option

      temp.push(j);

      // backtrack

      backtrack(j + 1);

      // remove option

      temp.pop();
    }
  }

  backtrack(1);

  return res;
};
