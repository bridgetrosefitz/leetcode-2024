/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /*
        [2,3,6,7]
        res = []

        temp = [2]
        curr = 2
            
            temp = [2,2]
            curr = 4

                temp = [2,2,2]
                curr = 6

                    temp = [2,2,2,2]
                    curr = 8

                temp = [2,2,2]
                curr = 6

            temp = [2,2]
            curr = 4

        
            


        
        

    */

  const temp = [];
  const res = [];
  let curr = 0;

  // candidates.sort()

  function backtrack() {
    // base case
    if (curr === target) {
      return res.push([...temp]);
    }

    if (curr > target) {
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      temp.push(candidates[i]);
      curr += candidates[i];
      backtrack();
      temp.pop();
      curr -= candidates[i];
      // break
    }

    // add option
    // backtrack
    // remove option
  }

  backtrack();

  return res;
};
