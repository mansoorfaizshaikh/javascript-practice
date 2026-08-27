// Number Analyzer Mini Project

let total = 0;
let sum = 0;
let evenSum = 0;
let oddSum = 0;

// Loop from 1 to 20
for (let i = 1; i <= 20; i++) {

    // Count the total numbers
    total = total + 1;

    // Calculate the sum of all numbers
    sum = sum + i;

    // Check whether the number is even or odd
    if (i % 2 === 0) {

        // Add the even number to evenSum
        evenSum = evenSum + i;

    } else {

        // Add the odd number to oddSum
        oddSum = oddSum + i;
    }
}

// Print the final results
console.log("Total =", total);
console.log("Sum =", sum);
console.log("Even Sum =", evenSum);
console.log("Odd Sum =", oddSum);