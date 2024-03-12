function nestedEvenSum(obj) {
  let total = 0;

  function helper(helperObj) {
    for (const key in helperObj) {
      const item = helperObj[key];
      if (item instanceof Object) {
        helper(item);
      } else if (typeof item === "number" && item % 2 === 0) {
        total = total + item;
      }
    }
  }

  helper(obj);
  return total;
}
