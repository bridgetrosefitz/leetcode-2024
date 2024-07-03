const exampleMap = {
  "&": "ab",
  "*": "&",
  $: "cd*",
};

function isAlpha(ch) {
  return ch.toUpperCase() !== ch.toLowerCase();
}

function resolveExpression(exp, map) {
  let temp = "";
  const newMap = {};

  function dfs(str) {
    for (const ch of str) {
      if (isAlpha(ch)) {
        return ch;
      } else {
        if (newMap[ch]) {
          return newMap[ch];
        } else {
          return dfs(map[ch]);
        }
      }
    }
  }

  dfs(exp);

  return temp;
}

console.log(resolveExpression("&$e$$", exampleMap));
