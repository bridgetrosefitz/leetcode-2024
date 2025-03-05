function mostFreq(arr) {
  let highestFrequency = 0;
  let mostFrequentNumber = -Infinity;

  const count = new Map();

  for (const num of arr) {
    if (!count.has(num)) {
      count.set(num, 0);
    }
    let freq = count.get(num);
    count.set(num, ++freq);
    if (freq > highestFrequency) {
      highestFrequency = freq;
      mostFrequentNumber = num;
    }
  }

  return mostFrequentNumber;
}
