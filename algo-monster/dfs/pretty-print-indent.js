const indentPerLevel = "   ";
function printValuesWithIndent(node, indent) {
  const currentIndent = indent + indentPerLevel;

  console.log(currentIndent + node.val);
  printValuesWithIndent(node, currentIndent);
}
