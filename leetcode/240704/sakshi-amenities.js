function hasAtLeastOne(counter) {
  const amenityExistsPerBlock = Object.values(counter).map(number => !!number);

  return (
    amenityExistsPerBlock.reduce((curr, acc) => (acc += curr), 0) >=
    Object.values(counter).length
  );
}

function getMinBlocks(requirements, blocks) {
  // move right pointer until we have at least one of each required amenity
  // move left pointer until we have less than one of each amenity (and only update left pointer if we do)
  // return the floor of the middle block

  const requirementsCounter = {};

  requirements.forEach(amenity => (requirementsCounter[amenity] = 0));

  let left = 0;

  let min = Infinity;
  let minLeft = 0;
  let minRight = 0;

  for (let right = 0; right < blocks.length; right++) {
    for (const requirement of requirements) {
      if (blocks[right][requirement]) requirementsCounter[requirement] += 1;
    }

    minRight = right;

    while (hasAtLeastOne(requirementsCounter)) {
      const possibleMin = right - left;
      if (possibleMin < min) {
        minLeft = left;
        min = possibleMin;
      }

      for (const requirement of requirements) {
        if (blocks[left][requirement]) requirementsCounter[requirement] -= 1;
      }

      left++;
    }
  }

  return Math.floor(min / 2);
}

const blocks1 = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true },
];

const requirements1 = ["gym", "school", "store"];

const requirements2 = ["school", "grocery"];
const blocks2 = [
  { restaurant: true, grocery: true },
  { cinema: true },
  { school: true },
  {},
  { school: true },
];
