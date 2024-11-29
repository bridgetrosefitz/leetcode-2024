import { useState } from "react";
import { PlayingCard } from "..";
import { FULL_CARDS_SET } from "./cardConstants";
import { useEffect } from "react";

const Game = () => {
  const [remainingCards, setRemainingCards] = useState([]);
  const [currentCardPointer, setCurrentCardPointer] = useState(0);

  useEffect(() => {
    reset();
  }, []);

  const generateRandomizedFullCardsSet = () =>
    [...FULL_CARDS_SET].sort(() => (Math.random() > 0.5 ? -1 : 1));

  const reset = () => {
    setRemainingCards(generateRandomizedFullCardsSet());
    setCurrentCardPointer(0)
  };

  const dealtCards = remainingCards
    .slice(0, currentCardPointer)
    .map(({ suit, value }) => {
      return (
        <PlayingCard key={`${value}-${suit}`} suit={suit} number={value} />
      );
    });

  const dealCards = () => {
    if (currentCardPointer <= 45) {
      setCurrentCardPointer((prev) => prev + 5);
    } else {
      setCurrentCardPointer(52);
    }
  };

  return (
    <>
      <div style={{display: 'flex', gap: 10}}>
      <button
        onClick={dealCards}
        style={{ color: currentCardPointer === 52 ? "grey" : "black" }}
      >
        Deal
      </button>
      <button onClick={reset}>Reset</button>
      </div>
      <p>{`Cards dealt: ${currentCardPointer}`}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{dealtCards}</div>
    </>
  );
};

export default Game;
