import Month from "./Month";
import { useState } from "react";
import { today } from "./calendarConstants";
import CalendarButtons from "./CalendarButtons";

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

  const [count, setCount] = useState(0);

  // THIS CONTAINS BAD PRACTICE
  // const handleChangeMonth = direction => {
  //   if (MONTH_DIRECTION[direction] === 0) {
  //     setMonthYear([today.getMonth(), today.getFullYear()]);
  //   }
  //   // should have a return here

  //   setMonthYear(([prevMonth, prevYear]) => {
  //     const newDate = new Date(
  //       prevYear,
  //       prevMonth + MONTH_DIRECTION[direction]
  //     );
  //     return [newDate.getMonth(), newDate.getFullYear()];
  //   });
  // };
  // console.log("RENDER", count);

  const handleChangeMonth = direction => {
    setMonthYear(([prevMonth, prevYear]) => {
      let newDate = today;
      if (MONTH_DIRECTION[direction] !== 0) {
        newDate = new Date(prevYear, prevMonth + MONTH_DIRECTION[direction]);
      }
      return [newDate.getMonth(), newDate.getFullYear()];
    });
  };

  const test = () => {
    console.log("count", count);
    setCount(1);
    console.log("count", count);
    setCount(2);
    console.log("count", count);
    setCount(prev => {
      console.log("prev", prev);
      return prev + 10;
    });
    setCount(prev => {
      console.log("prev", prev);
      return prev + 1;
    });
  };

  return (
    <>
      <button onClick={test}>BATCHING TEST - COUNT</button>
      <CalendarButtons handleClick={handleChangeMonth} />
      <Month monthYear={monthYear} />
    </>
  );
};

export default Calendar;
