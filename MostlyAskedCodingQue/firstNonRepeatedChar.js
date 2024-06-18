//****  Given a string, find the first non-repeated character in it. ****//
/**
 * @param {string} s
 * @return {string}
 */
function firstNonRepeatedCharacter(s) {
    // Create a map to store character counts
    const charCount = {};

    // Iterate over the string to count occurrences of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Iterate over the string again to find the first non-repeated character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return an empty string
    return '';
}

// Example usage:
console.log(firstNonRepeatedCharacter("swiss"));  // Output: "w"
console.log(firstNonRepeatedCharacter("hello"));  // Output: "h"
console.log(firstNonRepeatedCharacter("aabbcc")); // Output: ""
