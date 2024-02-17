function isValid(s) {
  const lookup = new Map();
  lookup.set("(", ")");
  lookup.set("[", "]");
  lookup.set("{", "}");

  const requiredParentheses = [];

  for (let i = 0; i < s.length; i++) {
    const parenthesis = s[i];
    const correspondingParenthesis = lookup.get(parenthesis);

    if (lookup.has(parenthesis)) {
      requiredParentheses.push(correspondingParenthesis);
    } else if (requiredParentheses.pop() === parenthesis) {
      continue;
    } else {
      return false;
    }
  }

  return requiredParentheses.length === 0;
}
