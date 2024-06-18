/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If we find a duplicate character, shrink the window from the left
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        // Add the current character to the set and update maxLength
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Example usage:
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 (The answer is "abc" with length 3)

s = "bbbbb";
console.log(lengthOfLongestSubstring(s)); // Output: 1 (The answer is "b" with length 1)

s = "pwwkew";
console.log(lengthOfLongestSubstring(s)); // Output: 3 (The answer is "wke" with length 3)
