/*
[[8, 8, "Alice"],
[2, 8, "Bob"],
[3, 2, "Emp3"],
[4, 3, "Emp4"],
[5, 4, "Emp5"],
[6, 3, "Emp6"],
[7, 8, "Emp7"]]

Alice 
|_Bob 
| |_Emp3 
|   |_Emp4
|   | |_Emp5
|   |_Emp6
|_Emp7

Alice >> Bob, Emp7
Bob >> Emp3
Emp3 >> Emp4, Emp6
Emp4 >> Emp5

Alice
|_Bob
| |_Emp3
|   |_Emp4
|   |_Emp6
|_Emp7

Alice >> Bob, Emp7
Bob >> Emp3
Emp3 >> Emp4, Emp6

*/
// [Alice, Bob, Emp3, Emp4, Emp5, Emp6, Emp7]
// [0, 0, 0, 0, 0, 0, 0]
// [1, 1, 0, 0, 0, 0, 0]
// Print tree + emp
// Set el at index of current emp ID to 1
// If we are at last index in neighbors array, set value to 2
// For each value in arr, if value is 1, print a line for it
// OPTIMIZE THIS  >> only the value at the location one prior; otherwise, print the same as before

/*

Alice
|_Bob
| |_Emp3
| |  |_Emp4
| |  |_Emp6
| |_Tasman 
|   |_Dude1
|_Emp7

Alice >> Bob, Emp7
Bob >> Emp3, Tasman
Emp3 >> Emp4, Emp6
Tasman >> Dude1


SIMPLE
Alice
|_Bob
| |_Emp3
|   |_Emp4
|_Emp5

Alice >> Bob, Emp5
Bob >> Emp3
Emp3 >> Emp4
Emp4 >> []
Emp5 >>

[Alice, Bob, Emp3, Emp4, Emp5]
[0,0,0,0,0] >> Print Alice; set Alice to 1
[1,0,0,0,0] >> Print line at position 0, print underscore, print Bob; set Bob to 1; call DFS with last child set to true
[1,1,0,0,0] >> Print line at position 0 and 1, print underscore, print Emp3; 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function printOrgChart(employeeData) {
  let start = null;
  const adj = new Map();
  const branches = new Array(employeeData.length).fill(0);

  function generateTree(branchId) {
    // OPTIMIZE THIS TO BE O(1) NOT O(N)
    // Fix this to use actual IDs, not start person being id = 0
    const res = [];
    for (let i = 0; i < branchId; i++) {
      if (branches[i] === 1) {
        res.push("|  ");
      }
    }

    if (branchId !== 0) res.push("|_");
    return res.join("");
  }

  for (const emp of employeeData) {
    adj.set(emp[0], { neighbors: [], name: emp[2] });
  }

  for (const emp of employeeData) {
    if (emp[0] === emp[1]) {
      start = emp[0];
      continue;
    }
    const mngNeighbors = adj.get(emp[1]).neighbors;
    mngNeighbors.push(emp[0]);
  }

  function dfs(emp, i) {
    console.log(generateTree(i) + adj.get(emp).name);
    branches[i] = 1;
    const neighbors = adj.get(emp).neighbors;
    if (neighbors.length === 0) branches[i] = 2;
    neighbors.forEach((neighbor, neighborIndex) => {
      if (neighborIndex === neighbors.length - 1) branches[i] = 2;
      dfs(neighbor, i + 1);
    });
  }

  dfs(start, 0);
}
