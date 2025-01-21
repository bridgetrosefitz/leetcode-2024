// import { applicants, checks } from "./data";
const applicants = [
  {
    id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
    first_name: "Erin",
    last_name: "Jones",
  },
  {
    id: "3beb0c73-439a-4705-a60f-2a13ca987724",
    first_name: "Linda",
    last_name: "Rocha",
  },
  {
    id: "868c44f2-c9fb-4489-82a1-8914fbae04d",
    first_name: "Jordan",
    last_name: "Rodriguez",
  },
];
const jsonChecks = [
  {
    id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
    check_type: "FRAUD",
    status: "FAILING",
  },
  {
    id: "d10d8058-ad32-4140-946c-a70ecd06fe7c",
    check_type: "CREDIT",
    status: "PASSING",
  },
  {
    id: "674ef3bb-9e3e-4722-8932-a6cd10caa070",
    check_type: "INCOME",
    status: "NEEDS_REVIEW",
  },
  {
    id: "ab2b3ba5-b22f-4c5e-be2b-569ca89d9b5a",
    parent_id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
    applicant_id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
    status: "NEEDS_REVIEW",
  },
  {
    id: "9f9d514f-c361-43a6-bb1f-45bc5ab3ad78",
    parent_id: "d10d8058-ad32-4140-946c-a70ecd06fe7c",
    applicant_id: "3beb0c73-439a-4705-a60f-2a13ca987724",
    status: "PASSING",
  },
  {
    id: "9d3dbaa1-2344-4583-aaf7-5b16535dd51c",
    parent_id: "674ef3bb-9e3e-4722-8932-a6cd10caa070",
    applicant_id: "868c44f2-c9fb-4489-82a1-8914fbae04d",
    status: "PASSING",
  },
  {
    id: "b62911c7-22af-49fc-ba36-c0d48ea222bf",
    parent_id: "674ef3bb-9e3e-4722-8932-a6cd10caa070",
    applicant_id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
    status: "NEEDS_REVIEW",
  },
  {
    id: "c4c12c93-357c-484e-88ad-db65dd7c5d",
    parent_id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
    applicant_id: "3beb0c73-439a-4705-a60f-2a13ca987724",
    status: "PASSING",
  },
  {
    id: "7db9658d-d8d6-4b5b-b28f-3c5fecd28244",
    parent_id: "d10d8058-ad32-4140-946c-a70ecd06fe7c",
    applicant_id: "868c44f2-c9fb-4489-82a1-8914fbae04d",
    status: "PASSING",
  },
  {
    id: "647faa3b-79a5-4aad-b736-d34b156e872e",
    parent_id: "d10d8058-ad32-4140-946c-a70ecd06fe7c",
    applicant_id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
    status: "PASSING",
  },
  {
    id: "97e4aeea-5c96-4de8-8dd4-b43ea2fa599f",
    parent_id: "674ef3bb-9e3e-4722-8932-a6cd10caa070",
    applicant_id: "3beb0c73-439a-4705-a60f-2a13ca987724",
    status: "PASSING",
  },
  {
    id: "17408d15-5d4c-4da7-bf6c-a76af1330804",
    parent_id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
    applicant_id: "868c44f2-c9fb-4489-82a1-8914fbae04d",
    status: "FAILING",
  },
];

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

function generateNestedChecks(checks, applicants) {
  // create parent object with keys of check type
  // add id and status attributes
  // pass again and put children into children array for relevant parent id
  // grab applicant info from applicants based on applicant_id

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

console.log(JSON.stringify(generateNestedChecks(jsonChecks), null, 2));

// console.log(
//   "FIRST NAME",
//   getApplicantFirstName("247d4e9f-ddc9-4c9f-93b5-24775ecb63ea")
// );

// const nestedChecks = checks.reduce((acc, curr) => {
//   if (curr.check_type) {
//     return (acc["check_type"] = {
//       id: curr.id,
//       status: curr.status,
//     });
//   }
// }, {});
