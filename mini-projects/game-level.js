// Game Level Checker

let coins = 120;
let level = 5;

// Kya player ke pass enough coins hai?
let hasEnoughCoins = coins >= 100;

// Kya player level 10 se niche hai?
let isBelowLevel10 = level < 10;

// Kya player level 5 par hai?
let isLevel5 = level === 5;

// Kya player level 6 par nahi hai?
let isNotLevel6 = level !== 6;

console.log("Enough Coins =", hasEnoughCoins);
console.log("Below Level 10 =", isBelowLevel10);
console.log("Level 5 =", isLevel5);
console.log("Not Level 6 =", isNotLevel6);