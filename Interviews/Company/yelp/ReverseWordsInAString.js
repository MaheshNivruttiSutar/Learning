//Given an input string, reverse the string word by word.
//For example,
//Given s = "the sky is blue",
//return "blue is sky the".


class ReverseWordsInAString {
    reverseWords(s) {
        // Trim whitespace and split the string by spaces
        const words = s.trim().split(/\s+/);
        let result = "";

        // Iterate backwards through the words
        for (let i = words.length - 1; i > 0; i--) {
            result += words[i] + " "; // Append each word followed by a space
        }

        // Append the last word without a trailing space
        return result + words[0];
    }
}

// Example Usage:
const reverser = new ReverseWordsInAString();
console.log(reverser.reverseWords("  Hello World!  ")); // Output: "World! Hello"
