function flat(oldArr, n) {
  const res = [];

  function helper(arr, level) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element) && level > 0) {
        helper(element, level - 1);
      } else {
        res.push(element);
      }
    }
  }

  helper(oldArr, n);
  return res;
}
