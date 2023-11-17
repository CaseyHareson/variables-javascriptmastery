// "NaN" VALUE IN JAVASCRIPT

// Nan is a result of incorrect or undefined mathematical operations.

// Creating variables with unrelated values.
const string = "Hello!";
const number = 10; 

// Operations with unrelated values will throw NaN;
const result = string / number;

// Show result in console. 
// "NaN" has mathematical value!!!
console.log(`String value: ${string}`);
console.log(`Number value: ${number}`);
console.log(`Dividing (String / Number) : ${result}. Result type: ${typeof result}`);