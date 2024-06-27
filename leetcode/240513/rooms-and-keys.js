/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let openedRooms = 0;
  const keys = [0];
  const usedKeys = new Set();

  while (keys.length) {
    // grab next available key
    const nextKey = keys.pop();

    // check if key has been used - if so, do nothing
    if (usedKeys.has(nextKey)) continue;

    // mark as used
    usedKeys.add(nextKey);

    // open the door
    openedRooms++;

    // get other doors we can open
    const neighbors = rooms[nextKey];
    neighbors.forEach(key => keys.push(key));
  }

  return openedRooms === rooms.length;
};
