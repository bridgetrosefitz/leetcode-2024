// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/*

Input: string, e.g. "23" // "2345678999" >> up to 4 char
Output: array of strings of lower case letters ["ad","","ae", "af"...]
Not checking for word validity

"2" >> ["a","b","c"] // ["b","c","a"]
"23" >> ["ad","","ae", "af","bd","be","bf","cd", "cd","cf"]
"22"

*/


// backtrack helper, taking an index
  // base case (where we push into res)
  // generate options
  // add option (push into temp)
  // backtrack on i + 1
  // remove option

// function generateLetterCombinations(str) { // "23"
//   const res = [] // [] // ["ad"]
//   const temp = [] // ["a"] // ["a","e"]

//   const letterMap = {
//     "2": ["a","b","c"],
//     "3":["d","e","f"],
//     "4":["g","h","i"],
//     "5":["j","k","l"],
//     "6":["m","n","o"],
//     "7":["p","q","r","s"],
//     "8":["t","u","v"],
//     "9":["w","x","y","x"],
//   }

//   function backtrack(i) { // 0 // 1
//     if(temp.length === str.length) {
//       res.push(temp.join(""))
//       return
//     }

//     const digit = str[i] // "2" // "2" // "3"
//     const letters = letterMap[digit] // ["a", "b","c"] // ["a", "b","c"] [d,e,f]

//     for(const letter of letters) {
//       temp.push(letter)
//       backtrack(i + 1)  
//       temp.pop()
//     }
//   }

//   backtrack(0)

//   return res
// }

  // "23"
  // b (a,d)
  // b (a,e)
  // b (a,f)
  // b (b,d)
  // b
  // b (c,d)


function generateLetterCombinations(digitStr) { // "23"
  const res = [] // [] // ["ad"]

  const letterMap = {
    "2": ["a","b","c"],
    "3":["d","e","f"],
    "4":["g","h","i"],
    "5":["j","k","l"],
    "6":["m","n","o"],
    "7":["p","q","r","s"],
    "8":["t","u","v"],
    "9":["w","x","y","x"],
  }

  function backtrack(i, str) { // 0 // 1
    if(str.length === digitStr.length) {
      res.push(str)
      return
    } 
      const digit = digitStr[i] // "2" // "2" // "3"
      const letters = letterMap[digit] // ["a", "b","c"] // ["a", "b","c"] [d,e,f]
  
      for(const letter of letters) {
        backtrack(i + 1, str+letter)  
      }
    

  }

  backtrack(0, "")

  return res
}

const testCases = [{"case": "2", "expected": ["a","b","c"]}, {"case": "23", "expected": ["ad","ae", "af","bd","be","bf","cd", "ce","cf"]}]

for(const test of testCases) {
  const res = generateLetterCombinations(test.case)
  const didPass = true
  res.forEach((str, i) => {
    if(test.expected[i] !== str)
      didPass = false
  })
  console.log("test", test.case)
  console.log(didPass ? "PASS" : "FAIL")
  console.log("expected", test.expected)
  console.log("actual", generateLetterCombinations(test.case))
}
