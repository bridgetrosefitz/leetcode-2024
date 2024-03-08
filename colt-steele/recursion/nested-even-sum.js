function nestedEvenSum(obj) {
  let total = 0;

  function helper(helperObj) {
    for (item of helperObj) {
      if (item.constructor.name === "Object") {
        helper(item);
      } else if (item % 2 === 0) {
        total = total + item;
      }
    }
  }

  helper(obj);
  return total;
}

///////////ANSWER

function nestedEvenSum2(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum2(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};
