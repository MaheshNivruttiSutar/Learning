//****  Longest Palindromic Substring  ****//
/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"


Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);   // Odd length palindromes
        let len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

var expandAroundCenter = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

// Example usage:
let s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"

s = "cbbd";
console.log(longestPalindrome(s)); // Output: "bb"
