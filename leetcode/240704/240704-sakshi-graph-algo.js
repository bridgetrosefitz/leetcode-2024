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

  function dfs(ch) {
    if (isAlpha(ch)) {
      return ch;
    }

    if (newMap.hasOwnProperty(ch)) {
      return newMap[ch];
    }

    let newString = "";

    for (const newCh of map[ch]) {
      newString += dfs(newCh);
    }

    newMap[ch] = newString;

    return newString;
  }

  for (const ch of exp) {
    temp += dfs(ch);
  }

  dfs(exp);

  return temp;
}

console.log(resolveExpression("&$e$$", exampleMap));
