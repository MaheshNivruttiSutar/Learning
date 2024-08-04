/**
 * Que.26 Program to find number of occurrences of a character in a string in javascript?
 *
 *
 */


// //Method 1
// //Using a Loop
// function countOccurrences(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// const string = "hello world";
// const character = "o";
// const occurrences = countOccurrences(string, character);
// console.log(`The character '${character}' occurs ${occurrences} times.`);




// //Method 2
// //Using split Method
// function countOccurrences(str, char) {
//     return str.split(char).length - 1;
// }

// const string = "hello world";
// const character = "o";
// const occurrences = countOccurrences(string, character);
// console.log(`The character '${character}' occurs ${occurrences} times.`);



//Method 3
//Using Regular Expressions
function countOccurrences(str, char) {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const string = "hello world";
const character = "o";
const occurrences = countOccurrences(string, character);
console.log(`The character '${character}' occurs ${occurrences} times.`);
