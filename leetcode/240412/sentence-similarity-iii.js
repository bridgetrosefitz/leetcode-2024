/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) return true;

  const longerWord =
    sentence1.length > sentence2.length ? sentence1 : sentence2;
  const shorterWord =
    sentence1.length < sentence2.length ? sentence1 : sentence2;

  const sandwich = longerWord.split(" ");
  const bread = shorterWord.split(" ");

  if (sandwich.length === 1 && bread.length === 1) {
    if (sentence1 === sentence2) return true;
    return false;
  }
  // split both sentences into array
  // bread
  // sandwich
  // if both words are length one, check if words are the same and return true or false

  if (bread.length === 1) {
    if (sandwich[0] === bread[0]) return true;
    if (sandwich[sandwich.length - 1] == bread[0]) return true;
    return false;
  }
  // if length of bread is 1
  // if is same as first word in sandwich
  // return true
  // else if bread is the same word as last word in sandwich
  // return true
  // else
  // return false

  let breadPointer = 0;
  let sandwichPointer = 0;

  if (bread[0] === sandwich[0]) {
    breadPointer++;
    sandwichPointer++;
    while (
      bread[breadPointer] !== sandwich[sandwichPointer] &&
      sandwichPointer < sandwich.length
    ) {
      sandwichPointer++;
    }

    // found word and is last word in sandwich = TRUE
    if (sandwichPointer === sandwich.length - 1) return true;

    // found word and all the following words are the same = TRUE

    // found word and is not last word in sandwich = FALSE
    if (sandwichPointer < sandwich.length - 1) {
      while (
        sandwichPointer < sandwich.length &&
        breadPointer < breadPointer.length
      ) {
        if (sandwich[sandwichPointer] !== bread[breadPointer]) return false;
        sandwichPointer++;
        breadPointer++;
      }

      if (
        sandwichPointer !== sandwichPointer.length ||
        breadPointer !== breadPointer.length
      )
        return false;
    }

    return true;

    // did not find word
  }

  // breadPointer
  // sandwichPointer
  // if first word of bread is the same as sandwich

  // increment both pointers
  // loop through sandwich until you find the next word in bread
  // if breadPointer is final index in Bread
  // return true
  // else
  // return false
  // If first word is the NOT the same
  // return false

  // there cannot be any more words after you find the second word
};
