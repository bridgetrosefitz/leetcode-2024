# Checks

At Cobblestone, we run a series of "checks" on applicants to ensure that everything about the applicant meets the property manager's criteria.

Checks can be nested. For example, you could have a criminal check each of which has several children (for example on for each offense). If any of the children are failing, the parent check can be considered failing. A check is a child check if it has a parent id. For the sake of the problem, you can assume the data we give you is consistent so the parents will match the data in the children.

We're going to do some operations on checks. You may not finish all of these items but we give you step 2 ahead of time for planning purposes.

### 1. Formatting

Given a list of checks (see `checks.json`) we want to re-format for display on the FE grouped by parent.
Note, that the applicant info is in `applicants.json`.

We want to format as follows:

```json
{
  "type of check": {
    "id": {check id},
    "status": {check status},
    "children": [
      {
        "id": {child id},
        "status": {status},
        "applicant_id": {applicant id},
        "first_name": {applicant first name},
        "last_name": {applicant last name}
      }
      ...rest of applicant checks
    ]
  }
}

/*
{
  FRAUD: {
    id: "3dcb9466-3bf1-4c57-98fe-9dc63dc8241c",
    status: "FAILING",
    children: [
      {
        id: "ab2b3ba5-b22f-4c5e-be2b-569ca89d9b5a",
        status: "NEEDS_REVIEW",
        applicant_id: "247d4e9f-ddc9-4c9f-93b5-24775ecb63ea",
        first_name: "Erin",
        last_name: "Jones"
      }
    ]
  }

}


APPROACH

function generateNestedChecks(checks, applicants) {

  // create parent object with keys of check type
  // add id and status attributes

  // pass again and put children into children array for relevant parent id

  // grab applicant info from applicants based on applicant_id

}

function generateChild(applicantId, applicants) {

}
*/



```

GOAL

> > map check and applucant data to be shape above

NOTES

> > check types: income, fraud, credit (could be more)
> > children are the
> > one application (e.g. for a room), but each roomate will have its own
> > application is a group of people
> > applicant is one person
> > each applicant can have multiple checks
> > think of it as parent > child on CHECK, not applicant > check relationship
> > only place where applicant matters is where you need the applicant ID

### 2. Overrides

We sometimes want to override checks. Overriding should cascade up. For example, if we override Jordan Rodriguez's failing
fraud check should update the parent to NEEDS_REVIEW because Erin is in needs review state.

Please implement a function to override a check for a given id and then re-print the result

> > overriding children
> > parent status is derived from children; therefore, if you override a child it will most likely need to override parent
> > parent status is most restrictive of its children
