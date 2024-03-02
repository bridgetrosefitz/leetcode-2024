function helper(numberOfLevels, testValue) {
  if (typeof (testValue !== object)) return [numberOfLevels, testValue];
  else {
    for (value of testValue) {
      helper(numberOfLevels + 1, value);
    }
  }
}

function getObjectDifferences(obj1, obj2) {
  helper(0, obj1);
  helper(0, obj2);
}
