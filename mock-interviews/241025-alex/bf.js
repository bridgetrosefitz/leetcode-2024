// given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses
// return array of strings containing valid combinations

// () () ()

// 1
// ()
// 2
// ()() (())
// 3
// ()()() ((())) ()(()) (())() (()())

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// ((((((())))))))))))))
// ((())
// ((
// ) >> closed cant come before open,

// valid means
// - there must be at least one open bracket when we see a closed bracket
// - there has to be at least one closing bracket for every opening bracket

// ()
// (
// ())
// )(
// n will be at least one

//               ""
//         "("        ")"
//     "((".  "()"
// "(((". "(()"

function isValidStep(ch, numOpenBrackets, numClosingBrackets) {
  // if ch is ")"
  // if numOpenBrackets is 0,
  // return false
  // increment numClosingBrackets
  // if numOpenBrackets !== numClosingBrackets
}

function generateValidCombinations(n) {
  const res = [];
  const curr = [];
  // when length of curr is 2*n, push copy into res

  // join every subarray into a string
  return res;
}
