/*

[1,2,48,49,50,99]
[2, 50, 99]
 L
     R

  
     
     
     */

const given = [2, 50, 99];
/*
[2, 50, 99];
 L   R


 populateBlogIds([2,50,99], 0,1)
 >> [1, 2, 49, 50]



*/
function populateBlogIds(leftBound, rightBound) {
  // stop when we get no new values back between left and right
  // check items less than leftBound
  // check items more than rightBound
  // check between every pair
  // build new array and return it
  // return new vals and spread between range
  const initialVals = getAllPageIds(_, _);

  if (!res.length) {
    return [];
  }

  // TO DO handle if res is length 1
  const allNewVals = [];
  for (let i = 0; i < initialVals.length - 1; i++) {
    const newVals = getAllPageIds(newVals[i], newVals[i + 1]);
    allNewVals.concat(newVals);
  }

  return initialVals.concat(allNewVals).sort();

  // return arr.splice(leftBound, 0, ...newVals);
}

populateBlogIds(0, 0);
