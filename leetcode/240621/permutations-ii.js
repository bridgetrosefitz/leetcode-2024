/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // [1,1,1,1,1,1,1,1,1,1]

  const temp = [];
  const res = new Set();
  const seen = new Map();
  const required = new Map();

  for (const num of nums) {
    required.set(num, (required.get(num) || 0) + 1);
    seen.set(num, 0);
  }

  /*
        res = [[1, 1, 2]]
        temp = [1, 1]
        seen = {
            1: 2,
            2: 0
        }

        required = {
            1: 2,
            2: 1
        }

        backtrack()
            i = 0
            num = 1
            seen.get(1) = 0
            required.get(1) = 2

                backtrack()
                i = 0
                num = 1
                seen.get(1) = 1
                required.get(1) = 2

                    backtrack()
                    i = 0
                    num = 1
                    seen.get(1) = 2
                    required.get(1) = 2

                    i = 1
                    num = 1
                    seen.get(1) = 2
                    required.get(1) = 2
                    
                    i = 2
                    num = 2
                    seen.get(2) = 0
                    required.get(2) = 1

                        backtrack()
                        * temp.length = nums.length *

                    pop!
                    decrement seen!
                    end of loop
                    end of backtrack call
                
                i = 1
                num = 1
                seen.get(1) = 2
                required.get(1) = 2

                i = 2
                num = 2
                seen.get(2) = 0
                required.get(2) = 1

                    backtrack()
                    * temp.length = nums.length *
                    * try to add a duplicate to set *

                pop!
                decrement seen!
                end of loop
                end of backtrack call
            
            i = 1

            ... halp
    */

  function backtrack() {
    // base case
    if (temp.length === nums.length) {
      res.add(JSON.stringify(temp));
      return;
    }

    // figure out your next option and pass forward with that option
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (seen.get(num) < required.get(num)) {
        temp.push(num);
        seen.set(num, seen.get(num + 1));
        backtrack();
        temp.pop();
        seen.set(num, seen.get(num - 1));
      }
    }
  }

  // kick off the backtracking
  backtrack();

  return [...res].map(JSON.parse);
};
