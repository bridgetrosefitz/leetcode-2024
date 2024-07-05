function flexibleLongest(arr, target) {
  let total = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    while (total > target) {
      total = -arr[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
}

// we could also use a while loop.
// But a for-loop for right more clearly shows
// that we are testing for each right element one at a time.
// We also have to specify that right increments until the end (input.length),
// not just "while less than target"

function sliding(input, target) {
  let total = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < input.length) {
    total += input[right];

    while (total > target) {
      total -= input[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

function doesntWork(arr, target) {
  let right = 0;
  let left = 0;
  let maxLength = 0;
  let total = arr[right];

  while (total <= target) {
    maxLength = Math.max(maxLength, right - left + 1);
    total += arr[right];
    right++;
  }

  while (total > target) {
    total -= arr[left];
    left++;
  }

  // IN THIS CASE, THERE IS NO OUTER LOOP KEEPING THE RIGHT POINTER MOVING
  // BETTER TO HAVE AN OUTER LOOP THAT CONTROLS RIGHT MOVING, THEN HAVE A WHILE LOOP WHICH
  // CORRECTS WHEN ANS HAS BECOME INVALID
  // BELOW THE "LEFT" WHILE LOOP, WE KNOW WHAT WE HAVE IS VALID
}
