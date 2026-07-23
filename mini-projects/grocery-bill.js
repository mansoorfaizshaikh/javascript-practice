let rice = 70;
let sugar = 45;
let oil = 180;
let milk = 30;
let bread = 40;

let total = rice + sugar + oil + milk + bread;

let discount = 50;
total -= discount;

let gst = total * 18 / 100;
total += gst;

let rewardPoints = 0;
rewardPoints += 10;
rewardPoints++;

console.log("Final Bill =", total);
console.log("Reward Points =", rewardPoints);