const countDown = num => {
  if (num <= 0) {
    // console.log("done :P")
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};
