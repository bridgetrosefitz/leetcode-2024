const PlayingCard = ({suit, number}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "15%",
        width: 50,
        height: 100,
        padding: 10,
        margin: 5
      }}
    >
      {number+" of "+suit}
    </div>
  );
};

export default PlayingCard;
