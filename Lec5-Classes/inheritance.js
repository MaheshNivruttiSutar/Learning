//**** Inheritance in JS ****//
/* Inheritance is passing down properties & method from parent class to child class.

If child & Parent have same method. child's method will be used. [Method Overriding]
*/


class Person {
    constructor(name) {
        this.spcies = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problem, build something");
    }
}


class Doctor extends Person {
    work() {
        console.log("treat patients")
    }
}

let p1 = new Person();
console.log(p1);

let e1 = new Engineer();
console.log(e1);

console.log("Studying Inheritance");