const n = arr.length;
if (n === 0 || n === 1) {
  return [];
}

const productArr = new Array(n).fill(1);
let product = 1;
for (let i = 0; i < n; i++) {
  productArr[i] = product;
  product *= arr[i];
}
product = 1;
for (let i = n - 1; i >= 0; i--) {
  productArr[i] *= product;
  product *= arr[i];
}

return productArr;

return res;
