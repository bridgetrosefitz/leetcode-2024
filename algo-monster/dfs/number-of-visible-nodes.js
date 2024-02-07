class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// function visibleTreeNode(node) {
//   // return value = number of visible nodes in sub tree
//   // state = current highest value of subtree

//   return 0;
// }

function dfs(root, maxSoFar) {
  if (!root) return 0;
  let totalVisibleNodes = 0;
  if (root.val >= maxSoFar) totalVisibleNodes++;

  totalVisibleNodes += dfs(root.left, Math.max(maxSoFar, root.val));
  totalVisibleNodes += dfs(root.right, Math.max(maxSoFar, root.val));

  return total;
}

function visibleTreeNode(node) {
  return dfs(root, Number.NEGATIVE_INFINITY);
}

// this function builds a tree from input; you don't have to modify it
// learn more about how trees are encoded in https://algo.monster/problems/serializing_tree
function buildTree(nodes, f) {
  const val = nodes.next().value;
  if (val === "x") return null;
  const left = buildTree(nodes, f);
  const right = buildTree(nodes, f);
  return new Node(f(val), left, right);
}

function splitWords(s) {
  return s == "" ? [] : s.split(" ");
}

function* main() {
  const root = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
  const res = visibleTreeNode(root);
  console.log(res);
}

class EOFError extends Error {}
{
  const gen = main();
  const next = line => gen.next(line).done && process.exit();
  let buf = "";
  next();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", data => {
    const lines = (buf + data).split("\n");
    buf = lines.pop();
    lines.forEach(next);
  });
  process.stdin.on("end", () => {
    buf && next(buf);
    gen.throw(new EOFError());
  });
}
