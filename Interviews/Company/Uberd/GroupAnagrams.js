// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.

class GroupAnagrams {
    groupAnagrams(strs) {
        if (!strs || strs.length === 0) {
            return [];
        }

        const map = new Map();

        // Sort the input array to ensure consistency in processing
        strs.sort();

        for (const s of strs) {
            const characters = s.split('').sort().join(''); // Sort the characters of the string

            // Check if the sorted string exists as a key in the map
            if (!map.has(characters)) {
                map.set(characters, []); // Initialize a new array for this sorted key
            }

            map.get(characters).push(s); // Add the original string to the corresponding array
        }

        return Array.from(map.values()); // Convert the values of the map to an array
    }
}

// Example Usage
const groupAnagrams = new GroupAnagrams();
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams.groupAnagrams(input));
// Output: [ [ 'bat' ], [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ] ]
