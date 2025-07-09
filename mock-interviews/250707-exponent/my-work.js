function absSort(arr) {
  /**
	@param arr: integer[]
	@return: integer[]
	*/

  // your code goes here

  /*
    Inputs
    - Type, length, hostile
    - arr - int[]
    - length: 0 - 10
    - negative and positive numbers
    - []

    Outputs
    - Type, length, mutate
    - int[] (sorted non-decreasing by abs val || neg first, the pos)
    - generate and return a copy of the arr

    APPROACH

    [2, -7, -2, -2, 0]
                    ^
    
    [[0,0],[2,2],[2,-2],[2,-2],[7,-7]] 
    
    2
    -4

    res = []

    // use JS inbuilt sort function, with fallback comparator (to prioritize negative numbers)
    // nlogn 

    */

  const intermediateArr = arr.map(el => [Math.abs(el), el]);
  intermediateArr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return intermediateArr.map(([_, original]) => original);
}
