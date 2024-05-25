/////////PREV ANSWER\\\\\\\\\\\\\

function objDiff(obj1, obj2) {
  // for each object
  // check that keys are the same
  // check that values are the same

  for (key of Object.keys(obj1)) {
    if (!obj2.hasOwnProperty(key)) return false;
    if (typeof obj2[key] === "object") objDiff(obj1[key], obj2[key]);
    if (obj2[key] === obj1[key]) continue;
  }

  for (key of Object.keys(obj2)) {
    if (!obj1.hasOwnProperty(key)) return false;
    if (typeof obj2[key] === "object") objDiff(obj1[key], obj2[key]);
    if (obj2[key] === obj1[key]) continue;
  }

  return true;
}
