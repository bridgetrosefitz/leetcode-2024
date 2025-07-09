
// https://interview.leetcode.com/interview/detail/u3D2s5/

// Sort the characters in input based on the ordering in order.

// Example:

// input = "abcca"
// order = "cba"

// Output = "ccbaa" Given a string s, determine if it can be palindrome after deleting at most one character from it.

// Input: s = "tacocats"
// Output: True

/** 
INPUTS
- type length hostile
- s, if character, it will be english; may include special ch, may include spaces
- "" >> false
- ignore special characters

- "tacocats"
- "aba"
- "abba"
- "stacocat"
- ""
- "sttacocat"
- "tacocatss"
- "t a"

OUTPUTS
- type length mutate
- true or false, true if AT MOST one character removal gives us a palindrome (0 or 1 ch removal is fine)


"tacocats"
  L       
        R

let skips = 0 1

// time: O(n) // num chs in s
// space: O(1)

// TO DO: see if i need to check from the back

*/

function isAlpha(ch) {

}

function isPalindromeWithMaxOneSkip(s) {
    // empty string
    if(s.length === 0) {
        return false
    }

    let left = 0
    let right = s.length - 1

    while(left < right) {
        // if left is a special ch, increment left and continue
        // if right is special ch, decrement right and continue
        // if chs are not a match
            // if skips is already at 1, break
            // else, increment skips AND increment left AND continue
        // increment left
        // decrement right

        if(!isAlpha(s[left])) {
            left++
            continue
        }
        if(!isAlpha(s[right])) {
            right--
            continue
        }

        if(s[left] !== s[right]) {
            if(skips === 1) {
                break
            } else {
                skips++
                left++
                continue
            }
        }

        left++
        right--
    }

    // reset
    skips = 0
    left = 0
    right = s.length - 1

        while(left < right) {
        // if left is a special ch, increment left and continue
        // if right is special ch, decrement right and continue
            if(!isAlpha(s[left])) {
                left++
                continue
            }
            if(!isAlpha(s[right])) {
                right--
                continue
            }

            // if chs are not a match
                // if skips are at 1, return false
                // else, increment skips and decrement right AND continue
            // increment left
            // decrement right

            if(s[left] !== s[right]) {
                if(skips === 1) {
                    return false
                } else {
                    skips++
                    right--
                    continue
                }
            }

            left++
            right--
 
        } 

        return true

}

You are given two strings: input and order.

Sort the characters in input based on the ordering in order.

Example:

input = "abcca"
order = "cba"

Output = "ccbaa"

/** 
INPUTS
- type length hostile
- string input 
- string order
- max one of each ch in order (max 26 chs)
- input: "abccad", order: "cba"
- input: "abcca", order: "cbad"
- order of remaining characters doens't matter but keep same characters together


OUTPUTS
- type length mutate

BRUTE FORCE

"abccad"
  ^
"cba"
  ^

 "ccb"

Time: O(length of input) * 26
> O(n)

{
    d: 1
}

TIME: O(length of input) + O(number of keys - max 26)
SPACE: O(1) - max 26

*/

function reorder(input, order) {
    const res = [] // [c,c,b,a,a,d]
    const counter = {}

    /** 
    "abccad"
  
     "cba"

     {
         DELETED a: 2
         DELETED b: 1
         DELETED c: 2
         d: 1
     }
    
    */

    // build counter
    // iterate over order
    // append to res, every char * freq in counter
    // delete key 
    // append to res every char * freq remaining in counter
    

    for(const ch of input) {
        counter[ch] = (counter[ch] || 0) + 1
    }

    for(const ch of order) {
        const freq = counter[ch] // 2

        res.push(...new Array(freq).fill(ch))
        delete counter[ch]
    }

    for(const [ch, freq] of Object.entries(counter)) { // [[d,1]]
        res.push(...new Array(freq).fill(ch))
    }

    return res.join("") // "ccbaad"
}












