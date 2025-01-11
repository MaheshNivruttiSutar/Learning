//Design a data structure that supports all following operations in average O(1) time.

//insert(val): Inserts an item val to the set if not already present.
//remove(val): Removes an item val from the set if present.
//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

//Example:
// Init an empty set.
//RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
//randomSet.insert(1);

// Returns false as 2 does not exist in the set.
//randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
//randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
//randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
//randomSet.remove(1);

// 2 was already in the set, so return false.
//randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
//randomSet.getRandom();


class RandomizedSet {
    constructor() {
        this.valueToIndex = new Map(); // Hash map to store value to index mapping
        this.values = []; // Dynamic array to store values
    }

    insert(val) {
        if (this.valueToIndex.has(val)) {
            return false; // Value already exists
        }
        // Add value to the end of the array and map its index
        this.valueToIndex.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    remove(val) {
        if (!this.valueToIndex.has(val)) {
            return false; // Value does not exist
        }
        // Get the index of the value to be removed
        const index = this.valueToIndex.get(val);
        // Get the last element
        const lastElement = this.values[this.values.length - 1];
        // Swap the value with the last element
        this.values[index] = lastElement;
        this.valueToIndex.set(lastElement, index);
        // Remove the last element from the array
        this.values.pop();
        this.valueToIndex.delete(val);
        return true;
    }

    getRandom() {
        // Generate a random index and return the corresponding value
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

// Example usage:
const randomSet = new RandomizedSet();
console.log(randomSet.insert(1)); // Output: true
console.log(randomSet.remove(2)); // Output: false
console.log(randomSet.insert(2)); // Output: true
console.log(randomSet.getRandom()); // Output: 1 or 2
console.log(randomSet.remove(1)); // Output: true
console.log(randomSet.insert(2)); // Output: false
console.log(randomSet.getRandom()); // Output: 2
