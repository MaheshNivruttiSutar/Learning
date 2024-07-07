//**** Practice Question ****//
/* Qs. Create a function using the "function" keyword that takes a String as an argument &
returns the number of vowels in the string. */

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Mahesh");
// countVowels("MaheshNivruttiSutar");


// //Another way:
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// let totalVow = countVowels("Mahesh");
// console.log("totalVow",totalVow);
// let totalVowels = countVowels("MaheshNivruttiSutar");
// console.log("totalVowels",totalVowels);



/* Qs. Create an arrows function to perform the same task */
// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVow("Mahesh");


//Another way
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
let totalVow = countVow("MaheshNivruttiSutar");
console.log("Total vowels in string", totalVow);