/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */

const isDiffByOneCh = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count += 1;
  }

  if (count === 1) return true;
  return false;
};

var minMutation = function (startGene, endGene, bank) {
  // adj list
  // with start and every sequence in bank as keys
  // loop over each key against each other key and track no. of differences

  const adj = new Map();

  for (const string of bank) {
    adj.set(string, []);
  }

  if (!adj.has(startGene)) adj.set(startGene, []);

  for (const key of adj.keys()) {
    for (const option of bank) {
      if (isDiffByOneCh(key, option)) {
        adj.get(key).push(option);
      }
    }
  }

  const q = [[startGene, 0]];
  const bankSet = new Set(bank);
  const visited = new Set();

  while (q.length) {
    const [curr, steps] = q.shift();

    if (curr === endGene) return steps;

    for (const neighbor of adj.get(curr)) {
      if (visited.has(neighbor)) continue;
      if (!bankSet.has(neighbor)) continue;

      q.push([neighbor, steps + 1]);
      visited.add(neighbor);
    }
  }

  return -1;

  // bfs
  // no. of steps
  // traverse from start until we hit end
  // return steps

  // return -1
};
