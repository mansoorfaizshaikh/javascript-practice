/*
========================================
        JAVASCRIPT NOTES
          DO...WHILE LOOP
========================================
*/


// ========================================
// 1. DO...WHILE LOOP
// ========================================

// A do...while loop executes the code first
// and checks the condition afterward.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// ========================================
// 2. REVERSE COUNTING
// ========================================

// Decrease the value using i--.

let count = 5;

do {
    console.log(count);
    count--;
} while (count >= 1);


// ========================================
// 3. IMPORTANT DIFFERENCE
// ========================================

// A do...while loop runs at least once,
// even if the condition is false.

let number = 10;

do {
    console.log(number);
    number++;
} while (number <= 5);

// Output:
// 10


// ========================================
// 4. DO...WHILE WITH IF
// ========================================

// if can be used inside a do...while loop.

let even = 1;

do {

    if (even % 2 === 0) {
        console.log(even);
    }

    even++;

} while (even <= 10);


// ========================================
// 5. DO...WHILE WITH SUM
// ========================================

let value = 1;
let sum = 0;

do {

    sum = sum + value;
    value++;

} while (value <= 10);

console.log("Sum =", sum);


// ========================================
// 6. BASIC STRUCTURE
// ========================================

// do...while structure:
//
// do {
//     // Code
// } while (condition);
//
// Code executes first.
// Condition is checked afterward.


// ========================================
// 7. WHILE vs DO...WHILE
// ========================================

// while:
// Condition → Code
//
// do...while:
// Code → Condition