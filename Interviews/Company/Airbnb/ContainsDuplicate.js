//Given an array of integers, find if the array contains any duplicates. Your function should return
//true if any value appears at least twice in the array, and it should return false if every element is distinct.


// Method 1
function containsDuplicates(arr) {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num);
    }
    return false;
}


// //Method 2
// function containsDuplicates(arr) {
//     // First, sort the array
//     arr.sort((a, b) => a - b);

//     // Check adjacent elements for duplicates
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return true; // Duplicate found
//         }
//     }

//     // No duplicates found
//     return false;
// }





// Example usage of the containsDuplicates function
console.log(containsDuplicates([1, 2, 3, 4]));    // Output: false
console.log(containsDuplicates([1, 2, 3, 1]));    // Output: true
console.log(containsDuplicates([10, 20, 30, 40])); // Output: false
console.log(containsDuplicates([10, 20, 10]));    // Output: true
