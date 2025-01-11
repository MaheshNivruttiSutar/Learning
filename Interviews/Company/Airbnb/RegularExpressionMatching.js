// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).
// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // Create a DP table with (m+1) x (n+1) dimensions
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Empty string and empty pattern match
    dp[0][0] = true;

    // Initialize the dp table for patterns like "a*" or "a*b*"
    for (let j = 1; j <= n; ++j) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    // Return the result from the bottom-right corner of the DP table
    return dp[m][n];
}

// Example usage
console.log(isMatch("aa", "a"));    // false
console.log(isMatch("aa", "aa"));   // true
console.log(isMatch("aaa", "aa"));  // false
console.log(isMatch("aa", "a*"));   // true
console.log(isMatch("aa", ".*"));   // true
console.log(isMatch("ab", ".*"));   // true
console.log(isMatch("aab", "c*a*b")); // true


