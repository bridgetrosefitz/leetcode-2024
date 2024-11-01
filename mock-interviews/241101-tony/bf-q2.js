/**
 * 1249. Minimum Remove to Make Valid Parentheses

 *Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

    It is the empty string, contains only lowercase characters, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

// stack just opening brackets?
// or all ch?
STACK = ["(","("]
STACK = []
ADDITIONAL EXAMPLES
"()" "()()" >> valid
"aa" >> valid
"(a)"
"((a))"

input: string
output: string > valid string with min removals
make sure () are open and closed in correct position

// if I only had opening brackets
// how do you know which ones were meant to be removed

// how do I ensure, based on what's leftover in the stack, that in the final string I'm building, I've removed the correct items

// tricky part is that I'm trying to account for two arrays at the same time

// letters dont affect validity

curr = [l,e,e,(,t,(,c,),o,),d,e,]

// if ch is a letter, push into stack
// else
  // if ch is open bracket
    // TO DO: check if we're at the end
    // push onto stack
  // else (if it is a closing)
    // if stack has length and item at top of stack is "("
      // pop from stack 
      // add ")" to our res // TO DO - CLARIFY THIS

  // handle excess open brackets










  /////////
  numOpenBrackets = 2 1 0
 * 
 */
