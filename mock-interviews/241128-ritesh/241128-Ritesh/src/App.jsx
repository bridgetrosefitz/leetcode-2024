import "./App.css";
import { Game } from "./components";

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
      <Game />
    </main>
  );
}

/**
 *
 *Build a game - dealer hand

13 of each suit
Deal a hand of 5 cards in a row
Button - deal button; on click, we want to have a set of 5 random cards getting picked from the set
Click the same button again - next 5 cards will be served will be from the remaining set of 47 cards

- Same button for both presses
- Press until the cards finish
- Reset button ("put 52 cards back in the stack")
- Cards - basic layout (rectangle, show the suit and the number)


NICE TO HAVE
- Styling (red, black, etc)


COMPONENTS

- Game
-- variable full set of cards
-- remainingCards (state) 
>> object with suit + number properties
>> sort randomly on first render, then store
-- dealtCards (variable calculated on each render)
-- function dealCards (if remaining cards length is 5 or greater, grab top 5; else slice off length of remaining; update dealtCards)
-- function reset (update remaining cards to be all 52 again)
- Card
-- suit
-- number

- Deal button
-- onClick > remove the last 5 cards from remainingCards
- Reset button
-- onClick > reset

 * 
 */
