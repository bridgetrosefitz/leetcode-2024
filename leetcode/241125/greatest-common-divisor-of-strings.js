/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  /*
        inputs: two strings, of at least 1 ch length
        output: string (subset which is a perfectly repeating subset of both str1 and str2)

        s1 = "ABCABC"
            |
        s2 = "ABC"
         |
        s1 = "ABCABCABCABC"
                         |
        s2 = "ABCABC"
                   |

        s1 = "ABCABCABC"  (9)
                      |
        s2 = "ABCABC" (6)
                 |
        x = C, B, A (3)

        s1 = ABABAB (6)
                |
        s2 = ABAB (4)
              |
        x = B A B (2)

        s1 length % X length


        >> split the bigger string into length x

        // iterate backwards over both strings
        // while x is less than the length of the smaller string
        // OR while longer string % x length + 1 has remainder 0
            // if ch does not match, return false

        // BRUTE FORCE
        "ABAB"
        "ABABAB"

        for each letter in longer string
        check that 



        




    */
};
