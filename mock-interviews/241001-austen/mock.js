/*
Org Chart
Input: 
Employee ID, Manager ID, Employee Name
[[8, 8, "Alice"],
[2, 8, "Bob"],
[3, 2, "Emp3"],
[4, 3, "Emp4"],
[5, 4, "Emp5"],
[6, 3, "Emp6"],
[7, 8, "Emp7"]]


The first problem involves printing a tree that reflects the management hierarchy of the organization.

Output:
Alice
  Bob
    Emp3
      Emp4
        Emp5
      Emp6
  Emp7

Alice >> Bob, Empl7
Bob >> Emp3
Empl

"    "

// start variable
let start = null;
// Build adj list
  // build map key for every emp ID
  // for every person
  // add emp ID to relevant manager
// Iterate over input arr to find person with same Employee ID as Manager ID
// DFS(empl, indent)
  // base case - no neighbors (maybe just let the for-loop run)
  // print name with given indent >> console.log
  // for each neighbor
    // DFS(neighbor, indent+"..")

// dfs(start,"")


// Assume there is only going to be one manager

*/

// TIME COMPLEXITY >> O(n)
// SPACE >> O(n)

// EXPECTING
// 8: [7]
// 7: []

/*

start = 8
{
  8: {neighrbos: [7], name: "Alice"}
  7: {neighrbos: [], name: "Emp7"}

}
*/
function printOrgChart(employeeData) {
  let start = null;
  const adj = new Map();

  for (const emp of employeeData) {
    adj.set(emp[0], { neighbors: [], name: emp[2] });
  }

  for (const emp of employeeData) {
    if (emp[0] === emp[1]) {
      start = emp[0];
      continue;
    }
    const mngNeighbors = adj.get(emp[1].neighbors);
    mngNeighbors.push(emp[0]);
  }

  function dfs(emp, indent) {
    console.log(indent + adj.get(emp).name);
    for (const neighbor of adj.get(emp).neighbors) {
      dfs(neighbor, 2);
    }
  }

  dfs(start, "");
}

/*
Alice
|_Bob
| |_Emp3
|   |_Emp4
|   | |_Emp5
|   |_Emp6
|_Emp7

// are we the last neighbor or not
// keep track of how many levels from absolute mng we are

// array that says at each index whether its parent is or isn't the last child, and that can tell you how many lines you need to print


*/
