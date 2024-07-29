/* Que1. You are creating a webside for your college. Create a class User with 2 properties, name
& email. It also has a method called ViewData() that allows user to view webside data.
*/

// let DATA = "secret information";

// class User {
//     costructor(name, email) {
//     this.name = name;
//     this.email = email;
//     }

//     viewData() {
//         console.log("Data = ", DATA)
//     }
// }


// let student1 = new User("Mahes", "Mahesh@gmail.com");
// let student2 = new User("Mahesh", "Mahesh@gmail.com");

// let teacher1 = new User("Mahesh", "Mahesh@gmail.com");
// console.log("Student1 = ", student1);






/* Que2. Create a new class called Admin which inerits from User. Add anew method called editData to admin that
allows it to edit website data.
*/



let DATA = "secret information";

class User {
    costructor(name, email) {
    this.name = name;
    this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA)
    }
}

class Admin extends User {
    editData() {
        DATA = "Some new value";
    }
}

let student1 = new User("Mahes", "Mahesh@gmail.com");
let student2 = new User("Mahesh", "Mahesh@gmail.com");

let teacher1 = new User("Mahesh", "Mahesh@gmail.com");
console.log("Student1 = ", student1);