function wordCountEngine(document) {
 
  // "Practice makes" length = 14, i = 8, wordLength = 7
  
  if(document.length === 0) return []
  

  const map = new Map()
  const rest = []
  
  let word = ""
  for(let i = 0; i < document.length; i++) {
    const char = document[i]
    if(!isAlpha(char)) continue
    if(char === " ") {
      const key = [document.length - i - (word.length - 1)] // index where first appear+word
    } else {
      word = word+char
    }
    

  }
  
  
  function wordCountEngine(document):
    wordMap = new Map()
    wordList = document.split()
    largestCount = 0;

    for i from 0 to wordList.length-1:
        # convert each token to lowercase
        word = wordList[i].toLowerCase()

        # and remove special/punctuation characters
        charArray = []
        for ch in word:
            if (ch >= 'a' and ch <= 'z'):
                charArray.push(ch)

        # form a string from the characters in charArray.
        # use your programming language's native “join”
        # or equivalent function. If there isn't any,
        # implement yourself. It's quite straightforward.
        cleanWord = join(charArray)

        # if the token consisted of only whitespace
        # characters, then cleanWord is an empty string
        # and we should ignore it and continue to the
        # next word.
        if (cleanWord.length < 1):
            continue

        # add clean word to the wordMap and
        # increase counter if needed
        count = 0
        if (cleanWord in wordMap):
            count = wordMap[cleanWord]
            count++
        else:
            count = 1

        if (count > largestCount):
            largestCount = count

        wordMap[cleanWord] = count

    # init the word counter list of lists.
    # Since, in the worst case scenario, the
    # number of lists is going to be as
    # big as the maximum occurrence count,
    # we need counterList's size to be the
    # same to be able to store these lists.
    # Creating counterList will allow us to
    # “bucket-sort” the list by word occurrences
    counterList = new Array(largestCount+1)
    for j from 0 to largestCount:
        counterList[j] = null

    # add all words to a list indexed by the
    # corresponding occurrence number.
    for word in wordMap.keys():
        counter = wordMap[word]
        wordCounterList = counterList[counter]

        if (wordCounterList == null):
            wordCounterList = []

        wordCounterList.push(word)
        counterList[counter] = wordCounterList

    # iterate through the list in reverse order
    # and add only non-null values to result
    result = []
    for l from counterList.length-1 to 0:
        wordCounterList = counterList[l]
        if (wordCounterList == null):
            continue

        stringifiedOccurrenceVal = toString(l)
        for m from 0 to wordCounterList.length-1:
            result.push([wordCounterList[m], stringifiedOccurrenceVal])

    return result
  
   //  if (ch >= 'a' and ch <= 'z')
  
  // make a map
  // make res array
  // find each word by iterating over the string
  // strip out capitals and symbols
  // increment, or store new key in map with index of first letter
  
  // go through every entry in map
  // make an array
  
  // QUESTIONS
  // length of string === 0?
}
  
    function isAlpha(char) {
    const alpha = new Set()
      alpha.add("a")
      alpha.add("b")
      alpha.add("c")
      alpha.add("d")
      alpha.add("e")
      alpha.add("f")
      alpha.add("g")
      alpha.add("h")
      alpha.add("i")
      alpha.add("j")
      alpha.add("k")
      alpha.add("l")
      alpha.add("m")
      alpha.add("n")
      alpha.add("o")
      alpha.add("p")
      alpha.add("q")
      alpha.add("r")
      alpha.add("s")
      alpha.add("t")    
      alpha.add("u")
      alpha.add("v")
      alpha.add("w")
      alpha.add("x")
      alpha.add("y")
      alpha.add("z")
      
      return alpha.has(char.toLowerCase())
}