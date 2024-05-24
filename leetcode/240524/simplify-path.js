/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];

  for (const section of path.split("/")) {
    if (section === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (section === "." || !section) {
      continue;
    } else {
      stack.push(section);
    }
  }

  return "/" + stack.join("/");
};
