// import * as Checks from "./checks.json";
// import * as Applicants from "./applicants.json";
// how to export named and default from same file (and import)
// const checks = require("./checks.json");
import checks from "./checks.json" assert { type: "json" };
import applicants from "./applicants.json" assert { type: "json" };

// FRAUD: {
//   id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
//   status: "FAILING",
//   children: [
//     {
//       id: "ab2b3ba5-b22f-4c5e-be2b-569ca89d9b5a",
//       status: "NEEDS_REVIEW",
//       applicant_id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
//       first_name: "Erin",
//       last_name: "Jones"
//     }
//   ]
// }

function generateNestedChecks() {
  // create parent object with keys of check type
  // add id and status attributes
  // pass again and put children into children array for relevant parent id
  // grab applicant info from applicants based on applicant_ids

  // const nestedChecks = checks.reduce((acc, curr) => {
  //   if (curr.check_type) {
  //     acc[curr.check_type] = {
  //       id: curr.id,
  //       status: curr.status,
  //     };
  //   }
  //   return acc;
  // }, {});

  const nestedChecks = {};

  checks.forEach(({ id, check_type, status }) => {
    if (check_type) {
      nestedChecks[check_type] = {
        id,
        status,
        children: [],
      };
    }
  });

  checks.forEach(({ id, parent_id, applicant_id, status }) => {
    const checksByType = Object.entries(nestedChecks);
    // [[FRAUD, {id, ...}],[]]
    if (parent_id) {
      checksByType.forEach(([_, data]) => {
        if (data.id === parent_id) {
          data.children.push({
            id,
            status,
            applicant_id,
            first_name: getApplicantFirstName(applicant_id),
            last_name: getApplicantLastName(applicant_id),
          });
        }
      });
    }
  });

  return nestedChecks;
}

function getApplicantFirstName(applicantId) {
  return applicants.find(applicant => applicant.id === applicantId).first_name;
}

function getApplicantLastName(applicantId) {
  return applicants.find(applicant => applicant.id === applicantId).last_name;
}

const statuses = ["FAILING", "NEEDS_REVIEW", "PASSING"];

const nestedChecks = generateNestedChecks();

function overrideCheck(checkId, newStatus) {
  // find the check and update its status
  // need to know which of each status are present on each check
  // need to select which status based on most restrictive
  // need to override the parent
  // TO CHOOSE STATUS
  // create array of statuses
  // OPTION 1
  // do a nested map
  // while mapping, collect statuses into a set
  // check the statuses from the statuses array one by one and set based on first one you hit
  // OPTION 2
  // Build map of check ids, with parent check as value
  // Build map of check ids to checks
  // Build map of parent, with children in an array
  // Point to those children in nested struture
  // Update the child status from map of check ids to checks
  // Update parent status from map of checks to parents

  for (const parentCheck of Object.values(nestedChecks)) {
    const childStatuses = new Set();
    let updateCurrentParent = false;

    for (const childCheck of parentCheck.children) {
      if (checkId === childCheck.id) {
        childCheck.status = newStatus;
        updateCurrentParent = true;
      }

      childStatuses.add(childCheck.status);
    }

    if (updateCurrentParent) {
      let mostRestrictiveStatus;

      for (const status of statuses) {
        if (childStatuses.has(status)) {
          mostRestrictiveStatus = status;
          break;
        }
      }

      parentCheck.status = mostRestrictiveStatus;
      break;
    } else {
      childStatuses.clear();
    }
  }
}

// console.log(JSON.stringify(generateNestedChecks(), null, 2));
overrideCheck("17408d15-5d4c-4da7-bf6c-a76af1330804", "PASSING");
console.log(nestedChecks["FRAUD"].status);

// QUESTIONS
// Am I calling a mutation to update the value in the database or just updating the object?
