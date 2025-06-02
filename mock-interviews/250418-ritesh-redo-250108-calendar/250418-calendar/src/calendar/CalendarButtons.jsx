const CalendarButtons = ({ onMonthChange }) => {
  return (
    <>
      <button onClick={() => onMonthChange("BACKWARD")}>{"<"}</button>
      <button onClick={() => onMonthChange("TODAY")}>TODAY</button>
      <button onClick={() => onMonthChange("FORWARD")}>{">"}</button>
    </>
  );
};

export default CalendarButtons;
