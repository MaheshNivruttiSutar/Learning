//Here is a JavaScript program to find duplicate words in a string:

function findDuplicateWords(input) {
    const words = input.toLowerCase().split(/\s+/); // Split by spaces and normalize case
    const wordCount = {};
    const duplicates = new Set();

    // Count occurrences of each word
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
        if (wordCount[word] > 1) {
            duplicates.add(word);
        }
    });

    return Array.from(duplicates);
}

// Example usage:
const input = "This is a test string and this is a sample test";
const result = findDuplicateWords(input);
console.log(result); // Output: ["this", "is", "test"]
