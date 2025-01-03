// Here is a JavaScript program to reverse each word in a string:
function reverseWordsInString(input) {
    return input
        .split(' ') // Split the string into an array of words
        .map(word => word.split('').reverse().join('')) // Reverse each word
        .join(' '); // Join the words back into a single string
}

// Example usage:
const input = "Hello World";
const result = reverseWordsInString(input);
console.log(result); // Output: "olleH dlroW"
