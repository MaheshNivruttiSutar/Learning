//Given an array of integers, find if the array contains any duplicates. Your function should return
//true if any value appears at least twice in the array, and it should return false if every element is distinct.

class ContainsDuplicate {
    containsDuplicate(nums) {
        const map = new Map();
        for (let i of nums) {
            if (map.has(i)) {
                return true; // Duplicate found
            } else {
                map.set(i, 1); // Add the number to the map
            }
        }
        return false; // No duplicates
    }
}
