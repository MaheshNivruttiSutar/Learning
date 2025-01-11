/*
2. Can you create an object of an interface/abstract class?
In JavaScript, you cannot directly create an object of an "interface" or "abstract class" because those are concepts from statically typed languages like Java or TypeScript.
However, in JavaScript (or TypeScript, which is a superset of JavaScript), you can define abstract classes and interfaces.

In JavaScript: There is no built-in support for interfaces or abstract classes, but you can use prototypes or classes to mimic them.
*/

// Example of an abstract class in JavaScript (though no real enforcement)
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.name = name;
    }
    speak() {
        throw new Error("Abstract method 'speak' must be implemented.");
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }
}

// let a = new Animal();  // Error: Cannot instantiate an abstract class.
let dog = new Dog("Buddy");
dog.speak();  // Output: Buddy barks!




// //In TypeScript: You can create an interface or abstract class.
// interface Animal {
//     name: string;
//     speak(): void;
// }

// class Dog implements Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} barks!`);
//     }
// }

// let dog = new Dog("Buddy");
// dog.speak();  // Output: Buddy barks!
