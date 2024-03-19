var minDifficulty = function (jobDifficulty, d) {
  let n = jobDifficulty.length;

  if (n < d) return -1;

  const hardestJobRemaining = new Array(n);
  let hardestJob = 0;

  for (let i = n - 1; i >= 0; i--) {
    hardestJob = Math.max(hardestJob, jobDifficulty[i]);
    hardestJobRemaining[i] = hardestJob;
  }

  let memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(d + 1).fill(-1);
  }

  return dp(0, 1);

  function dp(i, currentDay) {
    if (currentDay === d) return hardestJobRemaining[i];

    if (memo[i][currentDay] === -1) {
      let best = Number.MAX_VALUE;
      let hardest = 0;

      for (let j = i; j < n - (d - currentDay); j++) {
        hardest = Math.max(hardest, jobDifficulty[j]);
        best = Math.min(best, hardest + dp(j + 1, currentDay + 1));
      }
      memo[i][currentDay] = best;
    }

    return memo[i][currentDay];
  }
};
