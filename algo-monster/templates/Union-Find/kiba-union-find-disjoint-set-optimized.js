let groups = new Array(A.length).fill(0).map((v, i) => i);

let weights = new Array(a.length).fill(1);

function find(key) {
  if (key === groups[key]) return key;
  let parent = find(groups[key]);
  groups[key] = parent; // path compression
  return parent;
}

function union(x, y) {
  let [xGroup, yGroup] = [find(x), find(y)];

  if (weights[xGroup] > weights[yGroup]) {
    groups[yGroup] = groups[xGroup];
    weights[xGroup] += weights[yGroup];
  } else {
    groups[xGroup] = groups[yGroup];
    weights[yGroup] += weights[xGroup];
  }
}

// determine number of unique groups
// pass through 'find; to ensure all nodes point to root ancestor

new Set(groups.map(g => find(g))).size;
