const moneyOwed = {
  "Jesus-Bridget": 50, // name in key = 'is owed'
  // number represents how much first person owes second persons
  "Bridget-Jesus": 50,
};

const storedUsers = new Set(["jesus", "bridget"]);
const outgoing = {
  jesus: {
    bridget: 100,
  },
  bridget: {
    jesus: -100,
  },
};

// amount, sender, receiver
transfer(100, "Jesus", "Bridget");

// >> 'Bridget-Jesus'
// >> 'Jesus-Bridget'

// =======

// if first name is owed, number is positive; if second person is owed, number is negative >>

// carl -> 100 -> jesus
// daniel -> 100 -> carl

// can you settle this in the minimum posible transactions.
//  daniel -> 100 -> jesus
