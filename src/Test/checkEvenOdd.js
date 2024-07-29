// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
// Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
// Example usage
var number = 5;
if (isEven(number)) {
    console.log("".concat(number, " is even."));
}
else {
    console.log("".concat(number, " is odd."));
}
