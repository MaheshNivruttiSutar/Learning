//**** Classes in JS ****//
/* Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.
*/

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");