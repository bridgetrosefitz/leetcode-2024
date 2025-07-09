function decrypt(word) {
  // your code goes here
  // ASCII range is 97 - 122
}

/*

INPUTS:
- type, length, hostile
- string, lowercase english letters only
- "" >> ""
- "abc"

OUTPUTS:
- type, length, mutate
- string, decrypted word

APPROACH
- ascii map
- translate characters into ascii numbers
- subtract 1 from first ch to get first correct ch

-- Q: how many 26s should I add back



*


enc[n] = dec[n] + secondStep[n-1] + 26m
By isolating dec[n], we get:
dec[n] = enc[n] - secondStep[n-1] - 26m


function decrypt(word):
    secondStep = 1 // 99
    decryption = "" // "c"

    for i from 0 to word.length - 1:
        newLetterAscii = asciiValue(word[i]) // 100 110
        newLetterAscii = newLetterAscii - secondStep // 99 11

        while (newLetterAscii < asciiValue('a' - 97)):
            newLetterAscii += 26

        decryption = decryption + asciiToChar(newLetterAscii)
        secondStep += newLetterAscii

    return decryption

*/

// debug your code below
console.log(decrypt("dnotq"));
