function arrayOfArrayProducts(arr) {
  // your code goes here
  // input: array of integers
  // output: array of integers (products)
  // edge cases
  // empty array
  // array of 1 >> return array []
  // [1]

  //   INPUT: [8,10,2]
  // arr of product of every number so far from left to right
  //   LEFT: [8,80,160]

  // right to left
  //   RIGHT: [160,20,2]

  //   ANSWER: [20,16,80]

  //  BUILDING ANSWER: [20,]...

  // [2, 7, 3, 4]
  // LEFT: [2,14,42,168]
  // RIGHT: [168,84,12,4]
  // ANS: [84,24,56,42]

  // we want the answer which is everything to left of i (in "left") * everything to right of i (in "right")
  // take val at index i + 1 (from right) and multiply by index i - 1 (1 if out of bounds)

  //MAYBE USE TWO POINTERS? left = 0, right = arr.length -1
  if (arr.length === 1) return [];
  const res = [];
  const left = [];
  const right = [];
  // build left
  // build right

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      left[i] = arr[i];
    } else {
      left[i] = left[i - 1] * arr[i];
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      right[i] = arr[i];
    } else {
      right[i] = right[i + 1] * arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    // if i === 0
    // multiply i+1 in right by 1
    // if i === arr.length - 1
    // multiply i - 1 in left by 1
    // else
    // multiply i+1 in right by i-1 in left
    // push product into res[i]

    if (i === 0) {
      const product = right[i + 1];
      res[i] = product;
    } else if (i === arr.length - 1) {
      const product = left[i - 1];
      res[i] = product;
    } else {
      const product = right[i + 1] * left[i - 1];
      res[i] = product;
    }
  }

  return res;
}
