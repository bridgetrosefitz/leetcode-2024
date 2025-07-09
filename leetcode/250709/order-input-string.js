/*
INPUTS (type length hostile)
- str1 (letters to use)
- lower case alpha
- ""
- str2 (order)
- lower case alpha
- all chs in str1 will appear in here
- unique letters 
- only contains letters in str1



OUTPUTS (type length mutate)
- str3 (letters to use rearranged according to order of chs in str2)

EXAMPLES

str1 = "abcca"
str2 = "cba"
>> "ccbaa"

"abcca"
 ^      
"cba"
  ^

""

APPROACH

RUNTIME
- visit every letter in str1 O(a)
- visit every letter in str2 - 26 max - O(1)

BRUTE FORCE
- iterate left to right over chs in str2
- for each ch in str2, iterate over str1 and grab equivalent chs
- time: O(26 * a), space: O(1)

FREQUENCY
- pass over str1 to build count
{
  a: 2,
  b: 1,
  c: 2
}

- pass over str2
- build res str by adding x number of chs, acc to count

"cba"
   i

 res = "ccbaa"

  

REDUCE SPACE


*/

function reOrderString(str1, str2) {
  // "abcca"
  // "cba"
  const count = {};
  /* 
  
  {
    a : 2,
    b : 1,
    c : 2, 
  } 
  
  */
  let res = [];

  for (const ch of str1) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of str2) {
    const freq = count[ch]; // 2

    res = res.concat(new Array(freq).fill(ch)); // O(length of res so far + freq) // TO DO: maybe optimize by pushing freq number of times
  }

  return res.join("");
}
