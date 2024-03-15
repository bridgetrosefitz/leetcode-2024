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

// ANSWER

function capitalizeWords2(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  console.log(arr.slice(0, -1));
  const res = capitalizeWords2(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

function capitalizeWords3(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  const res = capitalizeWords3(arr.slice(0, -1));
  res.push(arr[0].toUpperCase());
  return res;
}
