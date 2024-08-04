/**
 * Que.10 How to find Prime number in javascript?
 *
 *
 */



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test the function
const number = 29;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}




// //Method 1
// function isPrime(num) {
//     if (num <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }
//     if (num <= 3) {
//         return true; // 2 and 3 are prime numbers
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//         return false; // multiples of 2 and 3 are not prime numbers
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const number = 20;
// console.log(`${number} is prime number: ${isPrime(number)}`);




// //Method 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 29];
// const primeNumbers = numbers.filter(isPrime);
// console.log('Prime numbers in the array:', primeNumbers);
