function shiftedArrSearch(shiftArr, num) {
  if (!shiftArr.length) return -1;
  // return the index of num in the shifted ('new') array

  //[9, 12, 17, 19, 20, 1, 2, 4, 5] num = 2

  // compare left most element to mid element
  // if num is smaller than left element, move left to mid
  // else, move right to mid

  let left = 0;
  let right = shiftArr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2);
    if (shiftArr[mid] === num) return mid;
    if (num < shiftArr[left]) {
      // if (nums[left] <= targetNum <= nums[mid]): # shrink right
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
}

console.log(shiftedArrSearch([9, 12, 17, 19, 20, 1, 2, 4, 5], 2));
// console.log(shiftedArrSearch())
// console.log(shiftedArrSearch())
