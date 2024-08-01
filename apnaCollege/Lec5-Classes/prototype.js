//**** Prototype in JS ****//
/* A javascript object is an entity having state and behaviour (properties and method)
IS objects have a special property called prototype
We can set prototype using __proto__ */

/* NOTE: If object & prototype have same method.
object's method will be used   */

console.log("Studying Prototype");

const employee = {
    calcTax () {
        console.log("Tax rate is 10%");
    }
}

const karanArjun = {
    salary : 50000,
    calcTax () {
        console.log("Tax rate is 10%");
    }
}

karanArjun.__proto__ = employee;