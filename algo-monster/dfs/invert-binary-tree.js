class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(tree) {
  if (tree === null) return null;

  return new Node(
    tree.val,
    invertBinaryTree(tree.right),
    invertBinaryTree(tree.left)
  );
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

function* formatTree(node) {
  if (node === null) {
    yield "x";
    return;
  }
  yield node.val.toString();
  yield* formatTree(node.left);
  yield* formatTree(node.right);
}

function* main() {
  const tree = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
  const res = invertBinaryTree(tree);
  console.log(Array.from(formatTree(res)).join(" "));
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
