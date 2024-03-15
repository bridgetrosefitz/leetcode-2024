var productExceptSelf = function (nums) {
  const pre = [];
  const post = [];
  const ans = [];

  let total = 1;
  for (let i = 0; i < nums.length; i++) {
    total = total * nums[i];
    pre.push(total);
  }

  total = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    total = total * nums[i];
    post.push(total);
  }

  post.reverse();

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      ans.push(post[1]);
    } else if (i === nums.length - 1) {
      ans.push(pre[nums.length - 2]);
    } else {
      ans.push(pre[i - 1] * post[i + 1]);
    }
  }

  return ans;
};
