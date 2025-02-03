function reverseArray(arr) {
  /*
  [1,2,3]
  [1,2]
  [1]
  []
  */
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}
