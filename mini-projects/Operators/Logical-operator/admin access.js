// Check if the user is logged in
let isLoggedIn = true;

// Check if the user is an admin
let isAdmin = false;

// Check if the user has special permission
let hasPermission = true;

// Access is granted when:
// 1. The user is logged in
// 2. AND the user is an admin OR has special permission
if (isLoggedIn && (isAdmin || hasPermission)) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}