const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(text => {
  debounceText.textContent = text;
});

const updateThrottleText = throttle(text => {
  throttleText.textContent = text;
});

input.addEventListener("input", e => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value, 500);
  updateThrottleText(e.target.value, 500);
});

function debounce(callback, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle(callback, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}
