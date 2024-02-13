function findLength(nums, k) {
  let left = 0,
    curr = 0,
    ans = 0;

  for (right in nums) {
    curr += nums[right];

    while (current > k) {
      current -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

function findAchievableLength(s) {
  let left = 0,
    curr = 0,
    ans = 0;

  for (right in s) {
    if (s[right] === "0") {
      curr++;
    }

    while (curr > 1) {
      if (s[left] === "0") curr--;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
