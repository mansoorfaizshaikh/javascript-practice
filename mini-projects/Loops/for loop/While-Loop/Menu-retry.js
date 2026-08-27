/*
========================================
        MINI PROJECT
      MENU RETRY SIMULATOR
========================================
*/

let choice = 1;
let attempts = 0;

do {

    // Count the current attempt
    attempts = attempts + 1;

    // Move to the next choice
    choice = choice + 1;

} while (choice !== 3);

// Display the total number of attempts
console.log("Attempts =", attempts);

// Display the final result
console.log("Access Granted");