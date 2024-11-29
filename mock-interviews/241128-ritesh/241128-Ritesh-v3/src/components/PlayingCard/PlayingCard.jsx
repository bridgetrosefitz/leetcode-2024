const PlayingCard = ({ suit, number }) => {

  const suitComponents = {
    'Hearts': <div class="material-symbols-outlined">favorite</div>,
    'Spades': <div class="material-symbols-outlined">
      filter_vintage
      </div>,
    'Clubs': <div class="material-symbols-outlined">
      change_history
      </div>,
    'Diamonds': <div class="material-symbols-outlined">
      nearby
      </div>
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "15%",
        width: 80,
        height: 130,
        padding: 10,
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: 2
        }}
      >
        <div>{number}</div>
        {suitComponents[suit]}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: 2
        }}
      >
        {suitComponents[suit]}
        <div>{number}</div>
      </div>
    </div>
  );
};

export default PlayingCard;
