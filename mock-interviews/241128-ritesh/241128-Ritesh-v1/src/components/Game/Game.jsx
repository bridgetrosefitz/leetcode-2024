import { useState } from "react";
import { PlayingCard } from "..";
import { FULL_CARDS_SET } from "./cardConstants";
import { useEffect } from "react";

const Game = () => {
  const [remainingCards, setRemainingCards] = useState([]);

  useEffect(() => {
    reset();
  }, []);

  const generateRandomizedFullCardsSet = () =>
    [...FULL_CARDS_SET].sort(() => (Math.random() > 0.5 ? -1 : 1));

  const reset = () => {
    setRemainingCards(generateRandomizedFullCardsSet());
  };
  
  const dealtIds = FULL_CARDS_SET.filter(
    (card) => !remainingCards.includes(card),
  );
  // MAKE THIS ORDERED BASED ON WHEN DEALT, NOT FULL_CARDS_SET ORDER

  // MAKE THIS A SET FOR O(1) checking

  // COULD HAVE DISABLED THE DEAL BUTTON WHEN WE ARE OUT OF CARDS > FEEDBACK TO USER THAT THERE ARE NO MORE CARDS TO DEAL

  const dealtCards = dealtIds.map((idStr) => {
    const [value, suit] = idStr.split("-");
    return <PlayingCard key={idStr} suit={suit} number={value} />;
  });

  const dealCards = () => {
    if (remainingCards.length >= 5) {
      setRemainingCards((prev) => prev.slice(0, prev.length - 5));
    } else {
      setRemainingCards(() => []);
    }
  };

  // DEALT CARDS SHOULD BE SHOWN IN THE SAME ORDER IN WHICH THEY WERE DEALT

  return (
    <>
      <button onClick={dealCards}>Deal</button>
      <button onClick={reset}>Reset</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{dealtCards}</div>
    </>
  );
};

export default Game;
