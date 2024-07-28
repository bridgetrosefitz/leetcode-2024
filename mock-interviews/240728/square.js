// Check if valid diagonal

for (const [testRow, testCol] of points) {
  Const[(refRow, refCol)] = refPoint;

  if (refRow === testRow || refCol === testCol) continue;

  // else check if we have the other two points
}

// Check if we have other two points
const diff = refRow - testRow;
const sameRow = [refRow, refCol + diff];
const sameCol = [refRow + diff, refCol];
if (pointsMap.has(sameRow) && pointsMap.has(sameCol)) {
  return Math.min(pointsMap.get(sameRow), pointsMap.get(sameCol));
}

// check negative area - that we are only checking on the opposite side
