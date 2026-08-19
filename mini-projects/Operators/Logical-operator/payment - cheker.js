// Check if the customer has cash
let hasCash = false;

// Check if the customer has a card
let hasCard = true;

// Payment is possible if the customer has cash OR a card
if (hasCash || hasCard) {
    console.log("Payment Possible");
} else {
    console.log("Payment Not Possible");
}