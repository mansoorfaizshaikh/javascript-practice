/*
========================================
        JAVASCRIPT NOTES
            WHILE LOOP
========================================
*/


// ========================================
// 1. WHILE LOOP
// ========================================

// A while loop repeats code while the condition is true.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// ========================================
// 2. REVERSE COUNTING
// ========================================

// Decrease the value using i--.

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// ========================================
// 3. SUM USING WHILE LOOP
// ========================================

let number = 1;
let sum = 0;

while (number <= 10) {
    sum = sum + number;
    number++;
}

console.log("Sum =", sum);


// ========================================
// 4. MODULO WITH WHILE LOOP
// ========================================

// % gives the remainder after division.

// Even number:
// i % 2 === 0

// Odd number:
// i % 2 !== 0


// Print even numbers from 1 to 20.

let even = 1;

while (even <= 20) {

    if (even % 2 === 0) {
        console.log(even);
    }

    even++;
}


// ========================================
// 5. BREAK WITH WHILE LOOP
// ========================================

// break completely stops the loop.

let a = 1;

while (a <= 10) {

    if (a === 6) {
        break;
    }

    console.log(a);
    a++;
}


// ========================================
// 6. CONTINUE WITH WHILE LOOP
// ========================================

// continue skips the current iteration
// and moves to the next iteration.

let b = 1;

while (b <= 5) {

    if (b === 3) {
        b++;
        continue;
    }

    console.log(b);
    b++;
}


// ========================================
// 7. IMPORTANT WHILE LOOP RULE
// ========================================

// Always make sure the loop variable is updated.

// Example:

let x = 1;

while (x <= 5) {
    console.log(x);
    x++;
}

// Without x++, the condition may never become false
// and the loop can run continuously.