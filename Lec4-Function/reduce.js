//*** REDUCE ****//
/* Performs some operations & reduces the array to a single value. It returns that single value.
*/
let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);