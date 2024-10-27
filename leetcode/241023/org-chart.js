// Alice
// |_Bob
// | |_Emp3
// |   |_Emp4
// |   | |_Emp5
// |   |_Emp6
// |_Emp7

function printOrgChart(employeeData) {
  let start = null;
  const adj = new Map();
  const branches = new Array(employeeData.length).fill(0);

  function generateTree(branchId) {
    const res = [];

    for (let curr = 0; curr < branchId; curr++) {}
  }
}
