const CARD_SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];

const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

export const FULL_CARDS_SET = CARD_VALUES.flatMap((value) => CARD_SUITS.map((suit) => ({suit, value})))

console.log("FULL_CARDS_SET", FULL_CARDS_SET)