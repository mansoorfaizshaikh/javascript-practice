// ========================================
// Logical Operators in JavaScript
// ========================================


// ========================================
// 1. AND Operator (&&)
// ========================================

// AND returns true only when both conditions are true

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {

    // Runs when both conditions are true
    console.log("Admin Panel Access");

} else {

    // Runs when at least one condition is false
    console.log("Access Denied");
}


// Example:
// true && true   -> true
// true && false  -> false
// false && true  -> false
// false && false -> false



// ========================================
// 2. OR Operator (||)
// ========================================

// OR returns true when at least one condition is true

let hasCash = false;
let hasCard = true;

if (hasCash || hasCard) {

    // Runs when cash OR card is available
    console.log("Payment Possible");

} else {

    // Runs when both are false
    console.log("Payment Not Possible");
}


// Example:
// true || true   -> true
// true || false  -> true
// false || true  -> true
// false || false -> false



// ========================================
// 3. NOT Operator (!)
// ========================================

// NOT reverses the boolean value

let isBanned = false;

if (!isBanned) {

    // !false becomes true
    console.log("Access Allowed");

} else {

    // !true becomes false
    console.log("Access Denied");
}


// Example:
// !true  -> false
// !false -> true


// 4. Mixed Logical Operators

// The user must be logged in
// AND must be an admin OR have special permission

let userLoggedIn = true;
let userAdmin = false;
let hasPermission = true;

if (userLoggedIn && (userAdmin || hasPermission)) {

    // Logged in AND (admin OR permission)
    console.log("Special Access Granted");

} else {

    console.log("Special Access Denied");
}