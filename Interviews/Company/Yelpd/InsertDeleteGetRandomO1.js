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
        this.map = new Map(); // Use Map for key-value pairs
        this.values = []; // Array to store values
    }

    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    insert(val) {
        if (!this.map.has(val)) {
            this.map.set(val, val); // Add to map
            this.values.push(val); // Add to values array
            return true;
        } else {
            return false; // Element already exists
        }
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    remove(val) {
        if (this.map.has(val)) {
            this.map.delete(val); // Remove from map
            const index = this.values.indexOf(val);
            if (index > -1) {
                this.values.splice(index, 1); // Remove from values array
            }
            return true;
        }
        return false; // Element not found
    }

    /** Get a random element from the set. */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex]; // Return random value
    }
}

// Example Usage:
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Output: true
console.log(randomizedSet.insert(2)); // Output: true
console.log(randomizedSet.insert(1)); // Output: false
console.log(randomizedSet.remove(1)); // Output: true
console.log(randomizedSet.getRandom()); // Output: 2 (since 1 has been removed)



/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */