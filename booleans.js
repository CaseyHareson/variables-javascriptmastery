// BOOLEANS
// Booleans represent a set of logical values: "true" or "false". 

// Create a variable with boolean value.
const condition = true;

// Create a variable to perform comparison operation.
const age = 18;

// Use "if, else" to return a value that meets the condition.
if(condition) {
    // If condition is "true" ask to perform ID verification
    console.log("Hi!! Please, show your ID!");
    // Show the value in console.
    console.log(`Show age: ${age}`);
    // Confirm age requirements.
    console.log(`Compare (ID 18+): ${age >= 18}`);
    // Display conditional message.
    if(age >= 18) {
        console.log("You can pass!!");
    } else {
        console.log("Hold! Adults only!!")
    }
} else {
    console.log("What's Up, YO!!");
}