//Given an input string, reverse the string word by word.
//For example,
//Given s = "the sky is blue",
//return "blue is sky the".


function reverseWords(s) {
    // Trim leading and trailing whitespace and split the string into words
    const words = s.trim().split(/\s+/);
    console.log("words",words);

    // Reverse the array of words
    const reversedWords = words.reverse();

    // Join the reversed array of words into a single string with a space separator
    return reversedWords.join(' ');
}

// Example usage
const input = "the sky is blue";
const reversed = reverseWords(input);
console.log(reversed); // Output: "blue is sky the"
