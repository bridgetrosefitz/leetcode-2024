function capitalizeWords(arr) {
  const res = [];

  function capitalize(arr) {
    if (arr.length === 0) return;

    const word = arr[0];

    res.push(word.toUpperCase());

    capitalize(arr.slice(1));
  }

  capitalize(arr);
  return res;
}
