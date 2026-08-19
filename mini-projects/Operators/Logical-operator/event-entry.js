// Store the person's age
let age = 21;

// Check if the person has a ticket
let hasTicket = true;

// Check if the person is a VIP
let isVIP = false;

// Check if the person is banned
let isBanned = false;

// Entry is allowed if:
// The person is 18 or older AND has a ticket
// OR the person is a VIP
// But a banned person cannot enter
if (((age >= 18 && hasTicket) || isVIP) && !isBanned) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}