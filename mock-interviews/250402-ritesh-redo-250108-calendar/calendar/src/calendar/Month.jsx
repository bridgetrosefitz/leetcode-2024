import { months, days as daysInWeek } from "./calendarConstants";
import Day from "./Day";

const getNumberOfDaysInMonth = (monthIndex, year) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const Month = ({ monthYear: [month, year] }) => {
  // calculate number days in month
  const daysInCurrMonth = getNumberOfDaysInMonth(month, year);

  // calculate the number of cells we need to display month
  const dayOfFirstOfMonth = new Date(year, month).getDay();
  const monthGridCells = Array.from(
    { length: daysInCurrMonth + dayOfFirstOfMonth + 1 },
    (_, i) => (i < dayOfFirstOfMonth ? null : i - dayOfFirstOfMonth + 1)
  );

  console.log("monthGridCells", monthGridCells);

  // S M T W T F S
  //             1
  // 2 3 4 5 6 7 8
  // 9 10

  // S M T W T F S
  // 1 2 3 4 5 6 7
  //             14
  //             21
  //           28

  // May > 31
  // Feb > 28, starting Sat
  // Feb > 28, starting Sun (smallest poss)
  // Feb (LY) > 29

  // generate array to map over with Day component
  const dayComponents = monthGridCells.map((date, i) => (
    <Day key={date + i} date={date} />
  ));

  // console.log("dayComponents", dayComponents);

  return (
    <>
      <div>{months[month]}</div>
      <div>{year}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {daysInWeek.map(day => (
          <span key={day} style={{ fontWeight: "bold" }}>
            {day[0]}
          </span>
        ))}

        {dayComponents}
      </div>
    </>
  );
};

export default Month;
