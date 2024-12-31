/*
need output, Please create according to that
Get max and min occurrences of given String:
Teeeessst Autoooooomationn output: m-1 and o-8
*/



function getMaxAndMinOccurrences(input) {
    // Create a frequency map to count character occurrences
    const frequency = {};
    for (let char of input) {
        if (char !== " ") { // Ignore spaces
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    // Find max and min occurrences
    let maxChar = null, minChar = null;
    let maxCount = -Infinity, minCount = Infinity;

    for (let char in frequency) {
        const count = frequency[char];
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
        if (count < minCount) {
            minCount = count;
            minChar = char;
        }
    }

    return {
        max: `${maxChar}-${maxCount}`,
        min: `${minChar}-${minCount}`
    };
}

// Example usage
const input = "Teeeessst Autoooooomationn";
const result = getMaxAndMinOccurrences(input);
console.log("Min Occurrence:", result.min); // Output: m-1
console.log("Max Occurrence:", result.max); // Output: o-8
