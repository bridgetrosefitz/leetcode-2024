const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const binarySearchToReturnLeftmostTarget = (arr, target) => {
  let left = 0;
  let right = arr.length; // why does this need to start outside the bounds of the array
  while (left < right) {
    // why can't this be OR EQUAL
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      // the OR EQUAL above means we keep decrementing right
      // until we find the first occurence of the target
      right = mid;
    } else {
      left = mid + 1; // once we have moved one step further left than the target, return the element to the right (which will be the first occurrenc of the target)
    }
  }
};
