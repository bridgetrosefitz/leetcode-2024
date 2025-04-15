/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const ROWS = heights.length
    const COLS = heights[0].length
    const getKey = (r,c) => `${r}-${c}`
    const parseKey = coord => {
        const [strRow, strCol] = coord.split("-")
        return [Number(strRow), Number(strCol)]
    }

    const dirs = [[0,1],[0,-1],[1,0],[-1,0]]

    const canReach = {
        pac: new Set(),
        atl: new Set()
    }

    const stack = []

    // Add values to stack and visited which we know can reach oceans
    for(let col = 0; col < heights[0].length; col++) {
        const pacCell = getKey(0, col)
        const atlCell = getKey(ROWS - 1, col)

        canReach.pac.add(pacCell) // Pacific at the top
        stack.push([0, col, 'pac'])

        canReach.atl.add(atlCell) // Atl at the bottom
        stack.push([ROWS - 1, col, 'atl'])
    }

    for(let row = 0; row < heights.length; row++) {
        const pacCell = getKey(row, 0)
        const atlCell = getKey(row, COLS - 1)

        canReach.pac.add(pacCell) // Pacific at left
        stack.push([row, 0, 'pac'])

        canReach.atl.add(atlCell) // Atl at right
        stack.push([row, COLS - 1, 'atl'])
    }

    // DFS
    while(stack.length) {
        const [r, c, ocean] = stack.pop()

        // add to visited
        canReach[ocean].add(getKey(r, c))

        // add next cells to stack
            // if in bounds
            // if not in visited
            // if height is correct

        for(const [dR, dC] of dirs) {
            const newRow = dR + r
            const newCol = dC + c

            if(newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS) {
                continue
            }

            if(canReach[ocean].has(getKey(newRow, newCol))) {
                continue
            }

            if(heights[newRow][newCol] < heights[r][c]) {
                continue
            }

            stack.push([newRow, newCol, ocean])
        }

        /*
        
        Why do we not add cells that can't reach ocean to visited 
        (don't we want to avoid revisiting them?)
        >> maybe because we will never queue them up if we can't visit them

        How am I avoiding the bug where we flow back and 
        forward between cells of same height?
        
        */
    }
 
    // for(const strCoord of canReach.pac) {
    //     const [row, col] = parseKey(strCoord)
    //     traverse(row, col, 'pac')
    // }

    // for(const strCoord of canReach.atl) {
    //     const [row, col] = parseKey(strCoord)
    //     traverse(row, col, 'atl')
    // }

    // get intersection
    const intersection = []

    for(const strCoord of canReach.pac) {
        if(canReach.atl.has(strCoord)) {
            intersection.push(strCoord)
        }
    }

    // return intersection

    return intersection.map(parseKey)
};