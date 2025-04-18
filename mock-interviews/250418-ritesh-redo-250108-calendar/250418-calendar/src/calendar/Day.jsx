const Day = ({ date, isHighlighted }) => {
  return (
    <div
      style={{
        alignContent: "center",
        ...(isHighlighted
          ? {
              margin: "0.2rem",
              background: "lightgray",
              borderRadius: "50%",
              color: "black",
            }
          : {}),
      }}
    >
      {date}
    </div>
  );
};

export default Day;
