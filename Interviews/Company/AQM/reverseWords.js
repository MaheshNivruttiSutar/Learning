/*
Reverse words at same place of given string:
i/p: Test Automation and o/p: tseT noitamotuA
*/







function reverseWords(input) {
    // Split the string into words
    const words = input.split(" ");

    // Reverse each word and return the new string
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    return reversedWords.join(" ");
}

// Example usage
const input = "Test Automation";
const output = reverseWords(input);
console.log(output); // Output: tseT noitamotuA
