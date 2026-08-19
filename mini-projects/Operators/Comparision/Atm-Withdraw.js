// ATM Withdrawal System

let balance = 5000;
let withdraw = 3000;

// Agar balance enough hai to withdrawal allow karo
if (balance >= withdraw) {

    let remainingBalance = balance - withdraw;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance =", remainingBalance);

} else {

    console.log("Insufficient Balance");

}