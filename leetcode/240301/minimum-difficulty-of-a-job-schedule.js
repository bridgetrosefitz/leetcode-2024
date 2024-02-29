var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length;
  const hardestJobRemaining = new Array(n).fill(0);
  const memo = new Array(n);

  if (n < d) {
    return -1;
  }

  let hardestJob = 0;

  for (let i = n - 1; i >= 0; i--) {
    hardestJob = Math.max(hardestJob, jobDifficulty[i]);
    hardestJobRemaining[i] = hardestJob;
  }

  for (let i = 0; i < n; i++) {
    memo[i] = new Array(d + 1).fill(undefined);
  }

  function dp(i, day) {
    if (day === d) return hardestJobRemaining[i];

    if (memo[i][day] === undefined) {
      let best = Infinity;
      let hardest = 0;

      for (let j = i; j < n - (d - day); j++) {
        hardest = Math.max(hardest, jobDifficulty[j]);
        best = Math.min(best, hardest + dp(j + 1, day + 1));
      }

      memo[i][day] = best;
    }

    return memo[i][day];
  }

  return dp(0, 1);
};
