function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const word = arr[0];
  const capitalisedWord = word.length
    ? word[0].toUpperCase() + arr[0].slice(1)
    : "";
  return [capitalisedWord, ...capitalizeFirst(arr.slice(1))];
}
