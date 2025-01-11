//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

//Example:
//Input: "babad"
//Output: "bab"

//Note: "aba" is also a valid answer.

//Example:
//Input: "cbbd"
//Output: "bb"


function longestPalindrome(s) {
    if (s.length === 0) return "";

    let start = 0;
    let end = 0;

    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the indices of the expanded substring
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes (single character center)
        let [start1, end1] = expandAroundCenter(i, i);
        // Even-length palindromes (pair of characters center)
        let [start2, end2] = expandAroundCenter(i, i + 1);

        // Update the longest palindrome indices
        if (end1 - start1 > end - start) {
            start = start1;
            end = end1;
        }
        if (end2 - start2 > end - start) {
            start = start2;
            end = end2;
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
}

// Example usage
const input1 = "babad";
console.log(longestPalindrome(input1)); // Output: "bab" or "aba"

const input2 = "cbbd";
console.log(longestPalindrome(input2)); // Output: "bb"
