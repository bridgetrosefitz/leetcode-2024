// ATTEMPT 1

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /*
    sum = 11
    "11", "123"
     ^

    "0" "1"

    */

  let sum1 = 0; // 0 1 10 11
  let sum2 = 0;

  for (const ch of num1) {
    const digit = Number(ch); // 1 1
    sum1 *= 10;
    sum1 += digit;
  }

  for (const ch of num2) {
    const digit = Number(ch);
    sum2 *= 10;
    sum2 += digit;
  }

  return String(sum1 + sum2);
};

// ATTEMPT 2

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /*
    sum = 11
    "11", 
      ^
    "123"
       ^       

    "0" "1"

    */

  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  let total = [];

  while (p1 >= 0 || p2 >= 0 || carry) {
    const sum = (Number(num1[p1]) || 0) + (Number(num2[p2]) || 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    total.push(digit);
    p1--;
    p2--;
  }

  return total.reverse().join("");
};
