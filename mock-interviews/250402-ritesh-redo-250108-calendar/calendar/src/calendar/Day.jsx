const Day = ({ date }) => {
  return (
    <span
      style={{
        backgroundColor: "white",
        opacity: date === today.getDate() ? "50%" : "0%",
      }}
    >
      {date}
    </span>
  );
};

export default Day;
