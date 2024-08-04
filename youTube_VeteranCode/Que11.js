/**
 * Que.11 How to find vowels from string in javascript?
 *
 *
 */


// //Metho 1
// //Using Regular Expressions
// function findVowelsUsingRegex(str) {
//     const vowels = str.match(/[aeiouAEIOU]/g);
//     // return vowels ? vowels : [];
//     return vowels || [];
// }

// const inputString = "Hello, World!";
// const vowels = findVowelsUsingRegex(inputString);
// console.log('Vowels found:', vowels);



//Using Iteration
function findVowelsUsingIteration(str) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const foundVowels = [];

    for (let char of str) {
        if (vowelsList.includes(char)) {
            foundVowels.push(char);
        }
    }

    return foundVowels;
}

const inputString = "Hello, World!";
const vowels = findVowelsUsingIteration(inputString);
console.log('Vowels found:', vowels);
