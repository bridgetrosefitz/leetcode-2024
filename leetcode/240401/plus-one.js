var plusOne = function (digits) {
  // while the current digit is 9,
  // make digit at currnt = 0
  // increment pointer to the left
  // if pointer is < 0,
  // unshift 1
  // else
  // increment number at pointer

  let pointer = digits.length - 1;
  while (digits[pointer] === 9) {
    digits[pointer] = 0;
    pointer--;
  }

  if (pointer < 0) {
    digits.unshift(1);
  } else {
    digits[pointer]++;
  }

  return digits;
};
