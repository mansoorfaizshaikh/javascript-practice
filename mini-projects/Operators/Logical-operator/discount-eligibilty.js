// Store the customer's total bill
let totalBill = 2500;

// Check if the customer is a member
let isMember = true;

// Check if the customer has a valid coupon
let hasCoupon = true;

// Check if the customer is banned
let isBanned = false;

// Discount is applied if:
// Bill is 2000 or more OR the customer is a member OR has a coupon
// But the customer must not be banned
if ((totalBill >= 2000 || isMember || hasCoupon) && !isBanned) {
    console.log("Discount Applied");
} else {
    console.log("No Discount");
}