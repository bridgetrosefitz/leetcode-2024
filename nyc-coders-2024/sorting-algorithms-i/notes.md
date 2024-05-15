- the kinds of operations you can perform on sorted inputs, and sorting design paradigms are useful in general
- if you have a sorted input, it can allow you to use a different, more efficient, approach
- news feeds in social media apps are sorted by some criteria
- if something is sorted, it is easier to filter too, usually
- therefore, chances are you will using sorting somewhere along the build chain in an app

https://blog.cds.co.uk/optimising-user-experience-with-best-practice-filtering-and-sorting

Time complexity
Space complexity
Stability
Adaptability
Input data type
Internal / external sorting (more advanced)
Online / offline sorting (more advanced)

TIME COMPLEXITY

- For sorting algorithms, you can not do better than nlogn
- They all fall between n^2 and nlogn

SPACE COMPLEXITY

- In-place or not, aka is the sorting done on the input itself, or do you create a new array to store the input

STABILITY

- Each row has multiple properties
- A stable sort keeps the existing sorted order for sub-sorts
- E.g. even if you are sorting by city, town names are still sorted with respect to the city; the initial order is maintained
- If your app requires you to maintain the initial order of data while sorting other aspects, you need a stable sort

  ADAPTABILITY

  - The initial state of your input can change the performance of your algorithm

INPUT DATA TYPE

- If you have a certain type of data (e.g. you are guaranteed to have just numbers in your array), you can perform specialised sorting algorithms which are designed for that data type
- E.g. Radix sort, bucket sort are specialised for certain types of inputs

INTERNAL & EXTERNAL SORTING

- In interview settings, every algo you'll use will be INTERNAL. Highly unlikely you'll have to write an external algo
- Internal: whenever you run your code, it is run inside the memory (RAM) - all variables are stored there. All of your input data fits in memory. The algo keeps all the data it needs to sort in your RAM.
- External: not fully stored in external storage. you have some input data in RAM, with additional input data in external storage being used as well
- Most sorting algos are internal. External merge sort "is the only one [Alvee] has written"
- RAM is expensive, external data is cheap

ONLINE AND OFFLINE

- Most sorting algos are offline
- offline means, the whole input needs to be provided at once to the sorting algorithm. If your input changes, you have to call the method again with all of the input again (e.g. if you want to add a number or item to the input). Your sorting algo needs to know all the elements in order to sort
- an online algo will know to add the next number to the correct place - it doesn't have to redo the whole thing. If you already have sorted data, the algo can put a new input in the right space without knowing the entire input

SORTING DEFINITION

- a rearrangement of a sequence of elements that puts the keys into non-decreasing order, relative to the ordering relation (you define the ordering relation)
- a sequence of elements
- An ordering relation is how you compare two elements
- Natural order vs ordering relation
- Law of Trichotomy. There are exactly three possibilities and only one can be true: a < b, a == b, b < a
- If you define a custom class and you compare two instances of that class, it cannot be that they satisfy more than one of these conditions. You can't have two objects where one is less than the other, but also equal to it
- Law of Transitivity
- a < b, b < c, therefore a < c

COMPARISON SORTS / NON-COMPARISON SORTS

- Comparison sorts are where you have two elements and you compare them using > / < / ==, and you swap elements in your array depending on your result
- For comparison sorts, the best you can have is nlogn
- Non comparison algos depend on a specific type of input (e.g. radix and bucket)

SELECTION SORT

- pick the first position in your array and find the smallest value in all of the array and place it in the first position
- you have an i and a j pointer. j is the indicator you use to find the smallest value to put in the ith position
- the minimum element index: the index of the lowest value you've seen so far
- once j has gone through the whole array, to update min el index, you swap el at i with el at min el index; and you increment i and put j at i + 1
- selection sort is NOT used in practice because it's so inefficient! We have seen all the elements before, after each swap!
- pretty much brute force, because I'm literally just picking the next smallest element and bringing it to the front!
- Properties: in-place, unstable, O(n2) in worst best and average!! Not adaptable, because even if your array is nearly sorted, it will still perform all the operations (On2 means the algo is not adapatble)

INSERTION SORT

- Same as selection, except our inner loop goes backwards instead of forwards
- Start at a position, and you compare backwards (if you're at 0, there's nothing to comapre to assume you're sorted)
- You can make your insertion sort stable by ensuring you use > not >=

H

- transforming opens up other options
- a heap under the hood is an array, but you visualise it as a tree because it's easier to see
- There are in-place and not in-place versions of this (in-place is more complicated)
- Not stable

GENERAL

- You usually don't want to sort on ALL FIELDS of an object. Generally UIs don't offer two types of sorting
- Memory-bound systems means that your system has limited memory - it can't scale because of memory limitations
- You need to know merge, XXX, and XXX for big companies
- How do you come up with the algo to sort it?
- Decrease and conquer: As you perform some operations, parts of your problem gets solve; e.g. at each increment of i, you are guaranteed that the previous elements are in their correct positions
- In an interview setting you'll have to use sub-routings to solve other problems, not implement sorting algos from scratch > partion-routing, merge-routing
- LC 902 - but just log

TO DO

- CSE 373 20au videos (uni of washington), lesson 23 (12-13 is priority queues)
- Practice the sorts. I should be able to implement them in 5 mins
