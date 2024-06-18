//****  Anagram Check ****//
/* Write a function to check if two strings are anagrams. */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    // Count characters in the first string
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract counts based on the second string
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char] -= 1;
    }

    return true;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false
