const Month = ({ monthYear: [month, year] }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div>{months[month]}</div>
      <div>{year}</div>
    </>
  );
};

export default Month;
