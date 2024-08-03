/**
 * Que.4 How to find Second largest value. and remove First largest value in array.
 *
 *
 */

function findSecondLargestAndRemoveLargest(arr) {
    if (arr.length < 2) {
        throw new Error('Array must contain at least two elements');
    }

    // Find the largest value
    let largest = Math.max(...arr);

    // Remove the largest value from the array
    let filteredArr = arr.filter(value => value !== largest);

    // If there were multiple occurrences of the largest value, we remove only one
    let firstOccurrenceIndex = arr.indexOf(largest);
    arr.splice(firstOccurrenceIndex, 1);

    // Find the second largest value in the filtered array
    let secondLargest = Math.max(...filteredArr);

    return {
        secondLargest: secondLargest,
        modifiedArray: arr
    };
}

// Example usage
let array = [3, 5, 7, 8, 8, 1, 8, 4];
let result = findSecondLargestAndRemoveLargest(array);

console.log("Second Largest Value: ", result.secondLargest); // Should print the second largest value
console.log("Modified Array: ", result.modifiedArray); // Should print the array with the largest value removed
