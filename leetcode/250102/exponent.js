// 6:02pm pst
function root(x, n) {
  // your code goes here

  /*
  Inputs:
    - type, number, hostile
    - x: number ("exponent result") >> only positive ) zero
    - n: number ("root number") >> only positive OR zero

  Output:
  - root: number (within error of 3 decimal places)
  
  // Number will be smaller than x

  x = 7, n = 3

    minGreaterThan = 2
    maxLessThan = 1
  0 1 2 3 4 5 6 7
  L     M.      R
  L.M R
      LM
      R

   0 1 2 3 4 5 6 7 8 9
      

  3 ** 3 

  */

  // TEST: x = 9; n = 2
  let left = 0; // 0 1 3
  let right = x; // 9 3

  while (left <= right) {
    const mid = Math.floor((right - left) / 2 + left); // 4 1 2 3

    if (Math.pow(mid, n) === x) {
      return mid;
    }

    if (Math.pow(mid, n) > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let greaterVal = left;
  let smallerVal = right;
  while (greaterVal - smallerVal > 0.001) {
    // right = 2
    // left = 3
    const mid = (greaterVal - smallerVal) / 2;

    if (Math.pow(mid, n) > x) {
      // we want a smaller mid
      greaterVal = (greaterVal - smallerVal) / 2;
    } else {
      // we want a larger mid
      smallerVal = (greaterVal - smallerVal) / 2;
    }
  }

  return smallerVal; // TO DO: CHECK

  //   return -1
}

///////////

// 6:02pm pst
function root(x, n) {
  // your code goes here

  /*
  Inputs:
    - type, number, hostile
    - x: number ("exponent result") >> only positive ) zero
    - n: number ("root number") >> only positive OR zero

  Output:
  - root: number (within error of 3 decimal places)
  
  // Number will be smaller than x

  x = 7, n = 3

    minGreaterThan = 2
    maxLessThan = 1
  0 1 2 3 4 5 6 7
  L     M.      R
  L.M R
      LM
      R

   0 1 2 3 4 5 6 7 8 9
      

  3 ** 3 

  */

  // TEST: x = 9; n = 2
  let left = 0; // 0 1 3
  let right = x; // 9 3

  while (left <= right) {
    const mid = Math.floor((right - left) / 2 + left); // 4 1 2 3

    if (Math.pow(mid, n) === x) {
      return mid;
    }

    if (Math.pow(mid, n) > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let greaterVal = left;
  let smallerVal = right;
  while (greaterVal - smallerVal > 0.001) {
    // right = 2
    // left = 3
    const mid = (greaterVal - smallerVal) / 2;

    if (Math.pow(mid, n) > x) {
      // we want a smaller mid
      greaterVal = mid;
    } else {
      // we want a larger mid
      smallerVal = mid;
    }
  }

  return smallerVal; // TO DO: CHECK

  //   return -1
}

/////////////////////
