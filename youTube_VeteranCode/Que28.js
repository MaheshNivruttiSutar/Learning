/**
 * Que.28 Program to check ArmStrong number in javascript?
 *
 *
 */


function isArmstrongNumber(num) {
    const digits = num.toString().split('');
    const numberOfDigits = digits.length;

    const sumOfPowers = digits.reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), numberOfDigits);
    }, 0);

    return sumOfPowers === num;
}

// Example usage
const number = 153; // Replace with any number to check
const result = isArmstrongNumber(number);
console.log(`${number} is ${result ? 'an' : 'not an'} Armstrong number.`);
