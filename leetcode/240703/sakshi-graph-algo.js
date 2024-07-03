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

  function dfs(str) {
    for (const ch of str) {
      if (isAlpha(ch)) {
        temp = temp + ch;
      } else {
        dfs(map[ch]);
      }
    }
  }

  dfs(exp);

  return temp;
}

console.log(resolveExpression("&$e$$", exampleMap));
