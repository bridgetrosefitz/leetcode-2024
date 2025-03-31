import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

const MILLISECONDS_FOR_ONE_PERCENT_PROGRESS = 30;

const ProgressBarsContainer = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBars(prev => prev.map(val => (val < 1 ? val + 0.01 : 1)));
    }, MILLISECONDS_FOR_ONE_PERCENT_PROGRESS);

    return () => clearTimeout(timeout);
  }, [bars]);

  const handleAddBar = () => {
    setBars(prev => [...prev, 0]);
  };

  const barsToShow = bars.map((percent, i) => (
    <ProgressBar key={i} percentFilled={percent} />
  ));

  return (
    <>
      <button onClick={handleAddBar}>Add bar</button>
      <div id="bars-column">{barsToShow}</div>
    </>
  );
};

export default ProgressBarsContainer;
