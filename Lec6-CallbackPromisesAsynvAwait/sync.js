//**** Sync in JS ****//
/* SYNCHRONOUS : Synchronous means the code runs in a particular sequence of instructions given in the program
Each indtruction wait for the previous instruction to complete it's execution.


ASNCHRONOUS : Due to synchronous programming. sometimes imp instructions get blocked due to some previous
instructions. which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/


// //Simple program 1
// function hello() {
//     console.log("hello");
// }
// // hello();
// setTimeout(hello, 4000);



//Program 2
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("Hello");
}, 4000);
console.log("three");
console.log("four");