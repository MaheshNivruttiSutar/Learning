/* Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
determine if s can be segmented into a space-separated sequence of one or more dictionary words.
You may assume the dictionary does not contain duplicate words.*/

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".

// Example usage
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true

function wordBreak(s, wordDict) {
    // Create a set for fast look-up of words
    const wordSet = new Set(wordDict);

    // Create a DP array with false values
    const dp = Array(s.length + 1).fill(false);
    console.log("dp",dp);

    // An empty string is always considered segmented
    dp[0] = true;

    // Iterate through the string
    for (let i = 1; i <= s.length; i++) {
        // Check each possible start index for the substring ending at i
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    // Return if the entire string can be segmented
    return dp[s.length];
}



