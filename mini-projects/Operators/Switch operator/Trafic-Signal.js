// Store the current traffic signal
let signal = "yellow";

// Check the signal and display the appropriate instruction
switch (signal) {

    case "red":
        // Red signal means stop
        console.log("Stop");
        break;

    case "yellow":
        // Yellow signal means wait
        console.log("Wait");
        break;

    case "green":
        // Green signal means go
        console.log("Go");
        break;

    default:
        // Runs when the signal is not recognized
        console.log("Invalid Signal");
}