/*

[2, 50, 99];

*/

function populateBlogIds() {
  function fillGaps(leftBound, rightBound) {
    const firstResults = getAllPageIds(leftBound, rightBound);
    let finalResults = [];

    for (let i = 0; i < firstResults.length - 1; i++) {
      const childResults = fillGaps(firstResults[i], firstResults[i + 1]);
      finalResults = finalResults.concat(childResults);
    }

    return [leftBound, ...finalResults, rightBound];
    // base case - no blog articles returned
    // else, fill gaps between every known 'node' (pair of ids)
    // return all the ids I found between the two ids given to me
  }

  const firstResults = getAllPageIds();
  let finalResults = [];

  for (let i = 0; i < firstResults.length; i++) {
    let childResults = [];

    if (i === 0) {
      childResults = fillGaps(0, firstResults[i]);
    } else if (i === firstResults.length - 1) {
      childResults = fillGaps(firstResults[i], Infinity);
    } else {
      childResults = fillGaps(firstResults[i], firstResults[i + 1]);
    }
    finalResults = finalResults.concat(childResults);
  }

  return finalResults;
}
