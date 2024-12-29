let count = 1;

function throttle(cb, delay = 100) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    // if delay elapses, we need to free up throttle to fire again
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
}

const myThrottleFunction = throttle(() => {
  count++;
  console.log("throttle", count);
}, 500);
