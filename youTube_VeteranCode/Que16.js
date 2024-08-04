/**
 * Que.16 How to find factors of a given integer in javascript?
 *
 *
 */

//Using a Loop
function findFactors(num) {
    const factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i); // i is a factor
        if (i !== num / i) {
          factors.push(num / i); // num / i is also a factor
        }
      }
    }

    return factors.sort((a, b) => a - b); // Optional: sort the factors in ascending order
  }

  const number = 36;
  const factors = findFactors(number);
  console.log(`Factors of ${number}:`, factors);
