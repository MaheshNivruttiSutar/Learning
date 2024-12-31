// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.


class DecodeWays {
    numDecodings(s) {
        const n = s.length;

        if (n === 0) {
            return 0;
        }

        const dp = new Array(n + 1).fill(0);
        dp[n] = 1; // Base case: empty string has one way to decode
        dp[n - 1] = s[n - 1] !== '0' ? 1 : 0; // Last character check

        for (let i = n - 2; i >= 0; i--) {
            if (s[i] === '0') {
                continue; // No valid decoding if current character is '0'
            } else {
                // Check if the substring can be decoded as a valid letter
                const twoDigit = parseInt(s.substring(i, i + 2), 10);
                dp[i] = (twoDigit <= 26) ? dp[i + 1] + dp[i + 2] : dp[i + 1];
            }
        }

        return dp[0]; // Return the number of ways to decode the entire string
    }
}

// Example Usage
const decoder = new DecodeWays();
console.log(decoder.numDecodings("12")); // Output: 2 ("AB" or "L")
console.log(decoder.numDecodings("226")); // Output: 3 ("BZ", "VF", "BBF")
console.log(decoder.numDecodings("0")); // Output: 0 (no valid decoding)
