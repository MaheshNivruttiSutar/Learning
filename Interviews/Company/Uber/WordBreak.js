// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".


class WordBreak {
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        dp[0] = true; // Base case: empty string can always be segmented

        for (let i = 1; i <= s.length; i++) {
            for (let j = 0; j < i; j++) {
                // Check if the substring s[j:i] is in the dictionary and if the prefix can be segmented
                if (dp[j] && wordDict.has(s.substring(j, i))) {
                    dp[i] = true;
                    break; // No need to check further
                }
            }
        }

        return dp[s.length];
    }
}

// Example Usage
const wordBreakInstance = new WordBreak();
const s = "leetcode";
const wordDict = new Set(["leet", "code"]);
console.log(wordBreakInstance.wordBreak(s, wordDict)); // Output: true
