function mostFrequent(arr) {
  const count = {};
  let maxNum;
  let maxCount = 0;

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
      maxNum = num;
      maxCount = count[num];
    }
  }

  return maxNum;
}

function mostFrequent2(arr) {
  const count = {};

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const maxNum = Math.max(...Object.values(count));

  /*
  
  {
    1:1
    2:2
    3:2
  }

  [[1,1],[2,2],[3,2]]
  */
  const maxNumFirstIndex = Object.entries(count).findIndex(
    ([num, count]) => count === maxNum
  );
  const str = Object.entries(count)[maxNumFirstIndex][0];
  return Number(str);

  // reduce
}

function mostFrequent3(arr) {
  const maxNumStr = arr.reduce(
    (acc, curr) => {
      const newObj = { ...acc };
      newObj[curr] = (new [curr]() || 0) + 1;
      const max = newObj[curr] > acc[1] ? curr : acc[1];

      return [newObj, max];
    },
    [{}, undefined]
  );

  return Number[maxNumStr];
}
