/*
========================================
        MINI PROJECT
        NUMBER GUESS COUNTER
========================================
*/

let secretNumber = 7;
let i = 1;
let attempts = 0;

while (i <= 10) {

    // Count the current attempt
    attempts = attempts + 1;

    // Check if the current number matches the secret number
    if (i === secretNumber) {
        break;
    }

    // Print the unsuccessful number
    console.log(i);

    // Move to the next number
    i++;
}

// Print the total number of attempts
console.log("Attempts =", attempts);

// Print the found number
console.log("Number Found =", i);