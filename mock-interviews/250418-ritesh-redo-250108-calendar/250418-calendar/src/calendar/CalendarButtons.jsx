const CalendarButtons = ({ handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick("BACKWARD")}>{"<"}</button>
      <button onClick={() => handleClick("TODAY")}>TODAY</button>
      <button onClick={() => handleClick("FORWARD")}>{">"}</button>
    </>
  );
};

export default CalendarButtons;
