/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  /*
    Inputs
    - int
    - may end with 0
    - may be negative
    - number is 0
    

    Approach
    - turn into string, flip, case at number
    -- O(n) storage
    - Divide by 10
    -- 123 / 10, floored > 12

    -- res = 0
    -- flag for is negative
    -- start with abs value 
    -- while *something*
        -- number = 12; remainder = 3
        -- multiply res by 10 // TO DO, try this after adding and see what happens
        -- add remainder to res > 3

    

    0 * 10 = 0
    0 + 3 = 3
    number = 1, remainder = 2
    3 * 10 = 30
    30 + 2 = 32
    number = 0, remainder = 1
    32 * 10 = 320
    320 + 1 = 321

    0
    number = 12, remainder = 0
    0 * 10 = 0
    0 + 0 = 0
    number = 1, remainder = 2
    0 * 0 = 0
    0 + 2 = 2
    number = 0, remainder = 1
    2 * 10 = 20
    20 + 1 = 21
   
    
    */

  let res = 0;
  let isNegative = x < 0;
  let currXState = Math.abs(x);

  while (currXState > 0) {
    res = res * 10;
    const number = Math.floor(currXState / 10);
    const remainder = currXState % 10;
    res += remainder;
    currXState = number;
  }

  // - why is 32 bit int equivalent to 2^something 101011
  // - why is the power, 31 and not 32
  // - does JS have this issue
  // - what is the data type 32 bit int vs 64 bit

  return res > 2 ** 31 ? 0 : isNegative ? res * -1 : res;
};
