// Store the user's role
let role = "viewer";

// Check the user's role and determine the level of access
switch (role) {

    case "admin":
        // Admin has full access
        console.log("Full Access");
        break;

    case "editor":
        // Editor can edit content
        console.log("Edit Access");
        break;

    case "viewer":
        // Viewer can only view content
        console.log("View Only");
        break;

    default:
        // Runs when the role is not recognized
        console.log("Invalid Role");
}