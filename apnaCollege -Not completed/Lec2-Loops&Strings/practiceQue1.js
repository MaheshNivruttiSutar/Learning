// //**** Practice Question ****//
// //Que1:Print all even numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//     // console.log("i =", i)
//     if (i % 2 == 0) {
//         console.log("Even number =", i);
//     }
// }




// // //Que1:Print all odd numbers from 0 to 100
// let numberArray = [];
// for (let i = 0; i <= 100; i++) {
//     // console.log("i =", i)
//     if (i % 2 !== 0) {
//         console.log("Odd number =", i);
//         numberArray.push(i);
//     }
// }
// console.log("Array",numberArray);






/* Que2: Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enter's correct value */
let gameNumber = 7;
let userNum = prompt("Guess the game number :");
while(userNum != gameNumber){
    userNum = prompt("You entered wrong number. Guess again :")
}
console.log("Congratulations, you entered the right number");