//**** super Keyword ****//
/* The super keyword is used to call the constructor of it's parent class to access the parent's
properties and methods */


class Person {
    constructor(name) {
        this.spcies = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor (name) {
        super(name);  //to invoke parent class constructor
    }
    work() {
        console.log("solve problem, build something");
    }
}


let engObj = new Engineer("Mahesh");
console.log(engObj);