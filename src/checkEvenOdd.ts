// Function to check if a number is even
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Function to check if a number is odd
function isOdd(num: number): boolean {
    return num % 2 !== 0;
}

// Example usage
const number = 5;

if (isEven(number)) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
