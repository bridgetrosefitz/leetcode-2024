import React, { useRef, useState } from "react";
export function useIsFirstRender(): boolean {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  const isFirstRender = useIsFirstRender();
  const [test, setTest] = useState(0);

  console.log("isFirstRender", isFirstRender);
  return (
    <div>
      <button onClick={() => setTest(Math.random() * 10)}>Random</button>
    </div>
  );
}
