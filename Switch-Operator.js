// ============================================================
// 📚 SWITCH OPERATOR
// ============================================================

// Switch operator ka use tab hota hai jab humein
// ek value ko multiple possible values ke saath compare karna ho.
//
// Basic Structure:
//
// switch (value) {
//
//     case value1:
//         // code
//         break;
//
//     case value2:
//         // code
//         break;
//
//     default:
//         // agar koi case match na ho
// }


// ============================================================
// 1️⃣ BASIC EXAMPLE
// ============================================================

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ============================================================
// 2️⃣ SWITCH WITH STRING
// ============================================================

let signal = "yellow";

switch (signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Color");
}


// ============================================================
// 3️⃣ CALCULATOR USING SWITCH
// ============================================================

let choice = 3;

let a = 10;
let b = 20;

switch (choice) {

    case 1:
        // Addition
        console.log(a + b);
        break;

    case 2:
        // Subtraction
        console.log(a - b);
        break;

    case 3:
        // Multiplication
        console.log(a * b);
        break;

    case 4:
        // Division
        console.log(a / b);
        break;

    default:
        console.log("Invalid Choice");
}


// ============================================================
// 4️⃣ USER ROLE EXAMPLE
// ============================================================

let role = "viewer";

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
        // Runs when the role doesn't match any case
        console.log("Invalid Role");
}


// ============================================================
// ⚠️ IMPORTANT: BREAK
// ============================================================

// break ka kaam switch ko wahi stop karna hai.
//
// Agar break nahi lagaya,
// to matching case ke baad neeche ke cases ka code bhi
// execute hota rahega. Isse "fall-through" kehte hain.

let number = 2;

switch (number) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");

        // Yahan break nahi hai,
        // isliye neeche wala case bhi execute hoga.

    case 3:
        console.log("Three");
        break;

    default:
        console.log("Invalid");
}

// Output:
// Two
// Three


// ============================================================
// ⚠️ IMPORTANT: DEFAULT
// ============================================================

// default tab execute hota hai jab koi bhi case match nahi hota.

let month = 15;

switch (month) {

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    default:
        console.log("Invalid Month");
}

// Output:
// Invalid Month


// ============================================================
// 🧠 IMPORTANT POINTS
// ============================================================

// 1. switch kisi value ko cases ke saath compare karta hai.
//
// 2. case ke baad comparison value likhte hain.
//
// 3. break switch ko stop karta hai.
//
// 4. break na hone par execution next case me chala jaata hai.
//
// 5. default tab execute hota hai jab koi case match nahi karta.
//
// 6. Ek switch ke andar multiple cases ho sakte hain.
//
// 7. switch string, number etc. values ke saath use ho sakta hai.
//
// 8. switch condition-based ranges ke liye nahi hota.
//    Example: age > 18
//    Aise cases ke liye if...else zyada suitable hai.