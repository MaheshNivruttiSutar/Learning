/*
1. Shift all even numbers to the left side of the array and odd numbers to the right side.
Here's how you can do this in JavaScript:
*/

function shiftEvenOdd(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++;
        } else if (arr[right] % 2 !== 0) {
            right--;
        } else {
            // Swap even and odd numbers
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(shiftEvenOdd(nums));  // Output will be [8, 2, 6, 4, 5, 3, 7, 1]
