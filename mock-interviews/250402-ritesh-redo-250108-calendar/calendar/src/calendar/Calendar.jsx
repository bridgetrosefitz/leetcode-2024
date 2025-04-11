import { useState } from "react";
import Month from "./Month";
import { today } from "./calendarConstants";

const MONTH_DIRECTION = {
  TODAY: 0,
  BACKWARD: -1,
  FORWARD: 1,
};

const Calendar = () => {
  const [monthYear, setMonthYear] = useState([
    today.getMonth(),
    today.getFullYear(),
  ]);

  const handleChangeMonth = direction => {
    if (direction === 0) {
      setMonthYear([today.getMonth(), today.getFullYear()]);
    }

    setMonthYear((prevMonth, prevYear) => {
      const newDate = new Date(prevYear, prevMonth);
      return [newDate.getMonth(), newDate.getFullYear()];
    });
  };

  return (
    <>
      <Month monthYear={monthYear} onMonthChange={handleChangeMonth} />
    </>
  );
};

export default Calendar;
