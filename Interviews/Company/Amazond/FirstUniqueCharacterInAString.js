//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
//Examples:
//
//s = "leetcode"
//return 0.
//
//s = "loveleetcode",
//return 2.
//Note: You may assume the string contain only lowercase letters.


function firstUniqChar(s) {
    // Create a frequency map to count occurrences of each character
    const freqMap = {};

    // Populate the frequency map
    for (const char of s) {
        if (freqMap[char]) {
            freqMap[char]++;
        } else {
            freqMap[char] = 1;
        }
    }

    // Find the index of the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (freqMap[s[i]] === 1) {
            return i;
        }
    }

    // If no unique character is found, return -1
    return -1;
}

// Example usage
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
