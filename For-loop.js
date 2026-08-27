/*
========================================
        JAVASCRIPT NOTES
        FOR LOOP & RELATED CONCEPTS
========================================
*/


// ========================================
// 1. FOR LOOP
// ========================================

// A for loop is used to repeat a block of code.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// ========================================
// 2. FOR LOOP STRUCTURE
// ========================================

// for (initialization; condition; update) {
//     code
// }

// initialization → where the loop starts
// condition     → how long the loop runs
// update        → changes the value after each iteration


// ========================================
// 3. INCREMENT (i++)
// ========================================

// i++ increases the value of i by 1.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ========================================
// 4. DECREMENT (i--)
// ========================================

// i-- decreases the value of i by 1.

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1


// ========================================
// 5. SUM USING FOR LOOP
// ========================================

// Add numbers from 1 to 5.

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log(sum);

// Output:
// 15


// ========================================
// 6. PRODUCT USING FOR LOOP
// ========================================

// Multiply numbers from 1 to 5.

let product = 1;

for (let i = 1; i <= 5; i++) {
    product = product * i;
}

console.log(product);

// Output:
// 120


// ========================================
// 7. MODULO OPERATOR (%)
// ========================================

// % gives the remainder after division.

console.log(10 % 3);

// Output:
// 1


// Even number:
// i % 2 === 0

// Odd number:
// i % 2 !== 0


// ========================================
// 8. BREAK
// ========================================

// break completely stops the loop.

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4


// ========================================
// 9. CONTINUE
// ========================================

// continue skips the current iteration
// and continues with the next iteration.

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5


// ========================================
// 10. NESTED FOR LOOP
// ========================================

// A loop inside another loop is called
// a nested loop.

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }

}

// The inner loop runs completely
// for every iteration of the outer loop.

// i = 1 → j = 1, 2
// i = 2 → j = 1, 2
// i = 3 → j = 1, 2


// ========================================
// 11. PATTERN USING NESTED LOOP
// ========================================

let pattern = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    pattern = pattern + "\n";
}

console.log(pattern);

// Output:
// *
// **
// ***
// ****
// *****


// ========================================
// 12. REVERSE STAR PATTERN
// ========================================

let reversePattern = "";

for (let i = 5; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        reversePattern = reversePattern + "*";
    }

    reversePattern = reversePattern + "\n";
}

console.log(reversePattern);

// Output:
// *****
// ****
// ***
// **
// *


// ========================================
// 13. NUMBER PATTERN
// ========================================

let numberPattern = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        numberPattern = numberPattern + j;
    }

    numberPattern = numberPattern + "\n";
}

console.log(numberPattern);

// Output:
// 1
// 12
// 123
// 1234
// 12345


// ========================================
// 14. REPEATING NUMBER PATTERN
// ========================================

let repeatingPattern = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        repeatingPattern = repeatingPattern + i;
    }

    repeatingPattern = repeatingPattern + "\n";
}

console.log(repeatingPattern);

// Output:
// 1
// 22
// 333
// 4444
// 55555


// ========================================
// 15. STRING ACCUMULATION
// ========================================

// A string variable can be used to build
// the complete output step by step.

let text = "";

text = text + "A";
text = text + "B";
text = text + "C";

console.log(text);

// Output:
// ABC


// ========================================
// 16. NEW LINE (\n)
// ========================================

// \n creates a new line inside a string.

let message = "Hello\nWorld";

console.log(message);

// Output:
// Hello
// World


// ========================================
// 17. IF / ELSE WITH FOR LOOP
// ========================================

// We can use conditions inside a for loop.

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    } else {
        console.log("Odd");
    }
}


// ========================================
// 18. MINI PROJECT: NUMBER ANALYZER
// ========================================

// Count numbers from 1 to 20.
// Calculate total sum.
// Calculate even number sum.
// Calculate odd number sum.

let total = 0;
let totalSum = 0;
let evenSum = 0;
let oddSum = 0;

// Loop from 1 to 20
for (let i = 1; i <= 20; i++) {

    // Count the total numbers
    total = total + 1;

    // Calculate the sum of all numbers
    totalSum = totalSum + i;

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
console.log("Sum =", totalSum);
console.log("Even Sum =", evenSum);
console.log("Odd Sum =", oddSum);

// Expected Output:
// Total = 20
// Sum = 210
// Even Sum = 110
// Odd Sum = 100


/*
========================================
IMPORTANT THINGS TO REMEMBER
========================================

for loop:
for (let i = start; condition; update) {}

i++ → increase by 1
i-- → decrease by 1

% → remainder

% 2 === 0 → even
% 2 !== 0 → odd

break → completely stops the loop
continue → skips current iteration

Nested loop:
Outer loop → controls the main repetitions/rows
Inner loop → runs completely for every outer iteration

\n → new line

sum = sum + i
→ adds the current value of i

product = product * i
→ multiplies the current value of i

pattern = pattern + something
→ builds a string/output step by step
*/