// e.g. arr = [8, 10, 2], output = [20, 16, 80]

function arrayOfArrayProducts(arr) {
  const n = arr.length;

  if (n === 0 || n === 1) {
    return [];
  }

  const productArr = new Array(n).fill(1);

  // Forward pass: get cumulative products going left to right
  // [1,8,80]
  let product = 1; // 8 80
  for (let i = 0; i < n; i++) {
    productArr[i] = product;
    product *= arr[i];
  }

  // Backward pass: get cumulative products going right to left
  // [20,16,80]
  product = 1; //20
  for (let i = n - 1; i >= 0; i--) {
    productArr[i] *= product;
    product *= arr[i];
  }

  return productArr;
}
