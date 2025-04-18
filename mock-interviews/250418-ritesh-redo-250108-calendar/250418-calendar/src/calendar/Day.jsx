const Day = ({ date, isHighlighted }) => {
  return (
    <div className={`calendar-day ${isHighlighted ? "highlighted-day" : ""}`}>
      {date}
    </div>
  );
};

export default Day;
