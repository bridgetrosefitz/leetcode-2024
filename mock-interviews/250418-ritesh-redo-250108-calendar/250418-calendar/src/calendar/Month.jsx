import { months, days as daysInWeek, today } from "./calendarConstants";
import Day from "./Day";

const getNumberOfDaysInMonth = (monthIndex, year) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const Month = ({ monthYear: [month, year] }) => {
  const daysInCurrMonth = getNumberOfDaysInMonth(month, year);

  const dayOfFirstOfMonth = new Date(year, month).getDay();

  // calculate number of cells we need to display curr month
  // by offsetting number of days in month by the day the month starts on
  const monthGridCells = Array.from(
    { length: daysInCurrMonth + dayOfFirstOfMonth },
    (_, i) => (i < dayOfFirstOfMonth ? null : i - dayOfFirstOfMonth + 1)
  );

  const isCurrentMonth =
    month === today.getMonth() && year === today.getFullYear();

  const dayComponents = monthGridCells.map((date, i) => (
    <Day
      key={date === null ? "null" + i : date}
      date={date}
      isHighlighted={isCurrentMonth && date === today.getDate()}
    />
  ));

  return (
    <>
      <div>
        {months[month]} {year}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 2.5em)",
          gridTemplateRows: "auto repeat(5, 2.5em",
        }}
      >
        {daysInWeek.map(day => (
          <span key={day} style={{ fontWeight: "bold" }}>
            {day.slice(0, 3)}
          </span>
        ))}
        {dayComponents}
      </div>
    </>
  );
};

export default Month;
