// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.


function groupAnagrams(strs) {
    const anagramMap = new Map(); // Initialize a map to group anagrams

    for (const str of strs) {
        // Sort the characters in the string to use as the key
        const sortedStr = str.split('').sort().join('');

        // If the key is not in the map, add it with an empty array
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }

        // Add the original string to the corresponding array in the map
        anagramMap.get(sortedStr).push(str);
    }

    // Convert the map values to an array of arrays
    return Array.from(anagramMap.values());
}

// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(input);
console.log(groupedAnagrams);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
