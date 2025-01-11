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
        this.map = new Map(); // Map to store value -> index
        this.values = []; // Array to store values
    }

    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    insert(val) {
        if (!this.map.has(val)) {
            this.map.set(val, this.values.length); // Store the index of the new value
            this.values.push(val); // Add the new value to the array
            return true;
        }
        return false;
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    remove(val) {
        if (this.map.has(val)) {
            // Get the index of the element to remove
            const index = this.map.get(val);

            // Move the last element to the index of the element to be removed
            const lastElement = this.values[this.values.length - 1];
            this.values[index] = lastElement;
            this.map.set(lastElement, index); // Update the map with the new index

            // Remove the last element from the array
            this.values.pop();
            this.map.delete(val); // Remove the deleted value from the map
            return true;
        }
        return false;
    }

    /** Get a random element from the set. */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

// Example Usage
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Output: true
console.log(randomizedSet.insert(2)); // Output: true
console.log(randomizedSet.remove(1)); // Output: true
console.log(randomizedSet.insert(2)); // Output: false
console.log(randomizedSet.getRandom()); // Output: 2 (only element remaining)






/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */