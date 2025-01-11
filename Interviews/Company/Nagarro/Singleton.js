/*
1. Singleton Design Pattern in JavaScript
In JavaScript, the Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

Example of Singleton in JavaScript:
*/

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = 'Some shared data';
        Singleton.instance = this;
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true, both refer to the same instance
