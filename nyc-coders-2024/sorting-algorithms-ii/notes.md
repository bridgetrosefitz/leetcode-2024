- You need to rank things before you show them to the user
- Sorting is one of the most fundamental algos in computer science and programming
- Sometimes the worst case doesn't give you enough info to decide whether to use the algo or not - the average case may be acceptable for production because it occurs so much more often. For interviews, always use the worst case, though.
- You have to define your objects to follow the laws (if you're not using integers)
- Binary search is decrease and conquer, because once you partition it, excluding the rest of the array, you don't have to think about it anymore - there's no combine step. You're decreasing the problem space as you go through the algorithm

Divide and conquer
Steps:

- Divide the input, based on some criteria
- Conquer / solve (solve the smaller probs you get by dividing the input)
- Combine

Merge sort

- SPlit array, sort part of it, and combine ... keep going until you have a fully sorted array
- The main logic of merge sort happens in the merge function
- You do the split through recursion
- To find the pivot (the point at which you split the array)... it's always the middle index in merge sort. n / 2 >> floor it (round down)
- To slice .. take all elements up to but not including .. you NEED TO BE WORKING WITH A COPY, because merge sort is not an in-place algorithm, whereas quicksort is. In MS, when you split, you're creating new arrays
  -- reason: how the merge routine works. Because you make copies in merge sort and perform the merges in the copied arrays, it allows you to split the work across different places. Makig a copy allows you to modularise the running - to parallelise more effectively
  -- the recursive calls
- if your input is so big that even the input set can't fit in memory, you can do it as an external sort. Using other caching systems or parts stored elsewhere.

Merge routine ('merge')

- The combine step
- You can assume left array and right array are sorted
- Recursive calls stop when there is one element in the array - you can assume it's already sorted
- Combining happens from the bottom
- Any time you call the merge function, your inputs (both left and right) must be sorted
- Our goal is to create a result array where all values in both arrays are sorted
- produce a new array where the values from both arrays are in a new array in sorted order
- "Routine" - the merge function can be used independent of the mergesort algorithm. It follows its own pattern

QUICK SORT

- Worst case is n2
- Average is nlogn
- In realworld inputs you're much more likely to be closer to an average case than worst case
- Finding the average time complexity, there is a lot of math involved to derive it
- in-place
- TO DO: Look up preferred language's sorting algorithm properties - in-place? time complexity?
- Quick sort - before you make reursive calls you have to do a lot of processing on the array (division and conquer)

Steps:

- Pivot selection (move els so that the boundary el where every el to left is smaller than pivot, and ev to its right is greater)
- partitioning subroutine ()
- pivot reset
  No combining required because you're sorting in place!

e.g. [1,2,3,4,5,6,7]

- How to choose a pivot: what is the optimal pivot. Whatever gives you an equal split of elements. This can be
- first / last el
- median of all els (in order to find this, you have to sort the array --- but you're already trying to sort the array). There is a way to find median in o(n) but o(n) is still pretty big, so we usually don't
- Median of first, middle, last
- Random element

If you pick 4, the left has half of the els and the right has half. The pivot is more efficient / optimal if you have a roughly equal split on both sides
-median value - middle number when you have a sorted input

Pivot selection
Steps:

- Select pivot (using any strategy)
- Swap element with last index

Partitioning

- pass the array, start and end to your recursive function
- if arr[h] < pivotEl, swap the place of l and h values; then increment l; move h el along all vals

Reset pivot

- Swao the value at lowest (l) index with the value at the end

How to choose

- in place / not in place
- one is good for external, one isn't
- on is stable, one isn't

Questions

- How do you make sure you have only one element on both sides
- Can you do this iteratively, too >> yes, more involved though
