function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Example usage
let result = divide(10, 0);
if (result !== undefined) {
    console.log("Result:", result);
} else {
    console.log("Division failed.");
}
