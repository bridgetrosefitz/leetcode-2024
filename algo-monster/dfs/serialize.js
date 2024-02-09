class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  let res = [];
  serializeDfs(root, res);
  return res.join(" ");
}

function serializeDfs(root, res) {
  if (!root) {
    res.push("x");
    return;
  }

  res.push(root.val);
  serializeDfs(root.left, res);
  serializeDfs(root.right, res);
}

function deserialize(s) {
  return deserializeDfs(s.split(" ")[Symbol.iterator]());
}

function deserializeDfs(nodes) {
  let val = nodes.next().value;
  if (val === "x") return;
  const cur = new Node(parseInt(val, 10));
  cur.left = deserializeDfs(nodes);
  cur.right = deserializeDfs(nodes);
  return cur;
}

function buildTree(nodes, f) {
  const val = nodes.next().value;
  if (val === "x") return null;
  const left = buildTree(nodes, f);
  const right = buildTree(nodes, f);
  return new Node(f(val), left, right);
}

function* print_tree(root) {
  if (!root) {
    yield "x";
  } else {
    yield root.val;
    yield* print_tree(root.left);
    yield* print_tree(root.right);
  }
}

function splitWords(s) {
  return s == "" ? [] : s.split(" ");
}

function* main() {
  const root = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
  const new_root = deserialize(serialize(root));
  console.log(Array.from(print_tree(new_root)).join(" "));
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
