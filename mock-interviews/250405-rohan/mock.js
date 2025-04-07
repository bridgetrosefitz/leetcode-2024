// :0644
// 20-25 mins
// ++ > 45mins

// I have a list of job descriptions and salaries that those jobs earn. 
[
    { salary: 604582, job: 'a brain surgeon' },
    { salary: 460356, job: 'a surgeon' },
    { salary: 431193, job: 'an anaesthetist' },
    { salary: 373733, job: 'a financial dealer' },
    { salary: 340729, job: 'an internal medicine specialist' },
    { salary: 276545, job: 'a psychiatrist' },
    { salary: 255754, job: 'a GP' },
    { salary: 214365, job: 'a mining engineer' },
    { salary: 204934, job: 'a lawyer' },
    { salary: 197720, job: 'a CEO or Managing Director' },
    { salary: 185834, job: 'a financial advisor' },
    { salary: 80000, job: 'the average income in Sydney' },
]

// I need a function that will 'contextify' a given salary. 
// 722k household income
/**
 *
 * Inputs
 * - As above
 * - targetIncome - int (full number)
 *
 * Outputs
 * - exactly two jobs
 * - [{},{}]
 *
 * tests = [722000,]
 *
 722000, [{salary: 500000, job: 'job1'},{salary: 222000, job: 'job2'}]
 722000, [{salary: 500000, job: 'job1'},{salary: 221999, job: 'job2'}]
 1000, null
 same job

 APPROACH

 [1000,2000,3001], 6000
             1
             2
   time: nlogn > n2

  [1000,2000,3000,3001], 6000 >> 2000 + 30001
              L
              R
  [3001]
   L
   R

   time: O(n)
   space: O(1)

// probably best to assume it's an input

// FOLLOW UP

Slider UI > required household income to buy median house in a given suburb
going to be called several 100 times per second
once a set of jobs is fixed, this should run as fast as possible


                         v
------------------------------------------------------------
100k                                                       1m

{blurb like having a surgeon married to a CEO}

slider.onChange((val) => {
  const jobs = findOptimalJobPair(val, jobs);
  // do something;
});

store sum for each pair of indices > key (pair of indiced), val sum
store answers for specific target salaries
sort jobs outside function and be done with it
cache something to help with binary search
[[combinedSalary, job1Index, job2Index], []] > logn time, n2 space

 * 
 */

const findOptimalPairs = (target, jobs) => {
  // sort jobs
  result = null // null case

  // init pointers

  // search until pointers cross
  while() {
    // get total
    // if too big...
    // if too small...
    // if goldilocks...
  }

  return result;
}


function findOptimalJobPair(target, jobs) { // [1000,2000,3000,3001], 6000
                                                           // L
                                                           // R  
  jobs.sort((a,b) => a.salary - b.salary)
  let left = 0
  let right = jobs.length - 1
  let bestSalaryLeft = null // null 0 1 2
  let bestSalaryRight = null // null 3 3 2
  
  while(left <= right) {
    const combinedSalary = jobs[left].salary + jobs[right].salary // 4001 5001

    if(combinedSalary === target) {
      return [jobs[left], jobs[right]]
    } else if(combinedSalary < target) {
      bestSalaryLeft = left
      bestSalaryRight = right
      left++
    } else {
      right--
    }
  }

  return [jobs[bestSalaryLeft], jobs[bestSalaryRight]]
  
  // sort
  // pointer at each end
  // while left <= right
  // bestSalary = 5001
  // update bestSalary if under target
  // while we are under target, move left pointer forwards
  // while we exceed target, move right pointer back
}

// const combos =  [[combinedSalary, job1Index, job2Index], []] > logn time, n2 space
function binarySearchCombinedSalaries(target) {
  let left = 0
  let right = combos.length - 1
  let largestSoFar = -1 // dont return if not valid

  while(left <= right) { // TO DO :check
    const mid = Math.floor(right - left) / 2 + left
    // get the number from the tuple

    // if equal target
    if(combos[mid] === target) {
      return combos[mid]
    } else if(combos[mid] < target) {
      largestSoFar = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return largestSoFar >= 0 ? combos[largestSoFar] : null;
}