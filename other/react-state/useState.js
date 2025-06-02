const React = () => {
  let state = [];
  let stateNextIndex = 0;

  const useState = initialValue => {
    // setter
    // see if there is an existing value in stateValues at localIndex (but how do we remember localIndex from before)
    // if nothing there, set it to initialValue
    // return value and setter
    const localIndex = stateNextIndex;
    stateNextIndex += 1;

    if (state[localIndex] === undefined) {
      state[localIndex] = initialValue;
    }

    const setter = val => {
      state[localIndex] = val;
      render();
    };

    return [state[localIndex], setter];
  };

  const render = () => {
    stateNextIndex = 0;
    Component();
  };

  return {
    useState,
  };
};
