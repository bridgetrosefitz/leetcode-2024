// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// CURRENT DIR: A single period '.' represents the current directory.
// PARENT DIR: A double period '..' represents the previous/parent directory.
// SLASH CONSOLIDATION
// DOT PATTERN: Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.

// The simplified canonical path should follow these rules:

// START WITH SLASH: The path must start with a single slash '/'.
// ONE SLASH ONLY TO SEPARATE: Directories within the path must be separated by exactly one slash '/'.
// REMOVE LAST SLASH (unless root): The path must not end with a slash '/', unless it is the root directory.
// EXPLICIT DIRS ONLY: The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.

/**
 *
 * Inputs:
 * - type, length, hostile
 * - string
 * - will definitely begin with a slash
 * - hostile: ends with slash; "/"; "..."; "/../" > "/"
 * Outputs:
 * - type, length, mutate
 * - string (canonical)
 *
 */
/**
 *
 *Example 1:
Input: path = "/home/"
Output: "/home"

Explanation:
The trailing slash should be removed.

Example 2:

Input: path = "/home//foo/"
Output: "/home/foo"

Explanation:
Multiple consecutive slashes are replaced by a single one.

Example 3:

Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"

Explanation:
A double period ".." refers to the directory up a level (the parent directory).

Example 4:

Input: path = "/../"
Output: "/"

Explanation:
Going one level up from the root directory is not possible.

Example 5:

Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"

Explanation:
"..." is a valid name for a directory in this problem.
 * 
 */

function buildCanonicalUrl(unixUrl) {
  // "/home/"
  //  "/home//foo/"
  // "/home/user/Documents/../Pictures"
  // "/../"
  const res = []; // ["home"] // ["home","","foo",""] // ["Pictures","Documents","user","home"]

  const initial = unixUrl.split("/"); // ["","home",""] // CONFIRM HOW SPLIT WORKS // ["foo","home"]
  // ["","home","user","Documents","..","Pictures"]
  // ["","..",""]
  // TO DO: make sure multi slashes are handled
  // ["","","a",""]

  while (initial.length) {
    // pop off stack
    // add to res

    // if empty string, skip

    const curr = initial.pop();
    if (curr === "..") {
      initial.pop();
    } else if (curr === ".") {
      continue;
    } else if (curr === "") {
      continue;
    } else {
      res.push(curr);
    }
  }

  const reversed = res.reverse().join("/"); // "/home/foo" // REVERSE IS AN ARRAY METHOD
  return "/" + reversed;

  // TO DO: Check home directory case "/" "//" "/abc/.."
  // TO DO: DONE Check no final slash
  // TO DO: Check we're not adding an unnecessary slash at the start
}
