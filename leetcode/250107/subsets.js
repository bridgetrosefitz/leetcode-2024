/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  /* [1,2,3] 
            |

        i = 0
        res.push []
        j = 0

            i = 1
            res.push [1]
            j = 1 > 2
            pop 2

                i = 2
                res.push [1,2] >> [1]
                j = 2 > 3 >> end for-loop
                pop 3

                    i = 3
                    res.push [1,3]
                    j = 3 >> return


    
    */

  const res = []; // [[], [1], [1,2],[1,2,3]]

  const temp = []; // [1,]

  function backtrack(i) {
    // 0 1
    res.push([...temp]);

    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
      backtrack(j + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return res;
};
