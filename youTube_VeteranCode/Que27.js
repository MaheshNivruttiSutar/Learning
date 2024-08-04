/**
 * Que.27 Program to print the Table of any user defined number using function in javascript?
 *
 *
 */



function printMultiplicationTable(number, range = 10) {
    for (let i = 1; i <= range; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  // Example usage
  const userNumber = 7; // Replace with any user-defined number
  const userRange = 10; // Optional: Replace with the desired range of the table
  printMultiplicationTable(userNumber, userRange);
