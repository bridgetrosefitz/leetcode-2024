function translateExpression(expression, map) {
  let res = "";
  let curr = "";
  let temp = "";
  const newMap = new Map();

  function dfs(ch, index) {
    const isAlpha = ch.toUpperCase() !== ch.toLowerCase();
    if (index === curr.length) {
      newMap.set(curr, temp);
      return;
    }

    if (newMap.has(ch) || isAlpha) {
      temp = temp + ch;
    }

    for (const neighbors of map.get(ch)) {
    }
  }

  for (const ch of expression) {
    dfs(ch, 0);
  }
}
