// initialize so each member is in its own group

let groups = new Array(A.length).fill(0).map((v, i) => i);

function find(key) {
  if (key === groups[key]) return key;

  // find root

  return find(groups[key]);
}

function union(x, y) {
  groups[find(x)] = groups[find(y)];
}

// when two members belong to the same group

union(a, b);
