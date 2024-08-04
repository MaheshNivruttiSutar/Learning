/**
 * Que.15 How to merge to arrays and sort them in javascript?
 *
 *
 */

//Merging and Sorting Arrays
const array1 = [5, 3, 8, 1];
const array2 = [4, 7, 2, 6];

// Merge the arrays
const mergedArray = array1.concat(array2);

// Sort the merged array
const sortedArray = mergedArray.sort((a, b) => a - b);

console.log('Merged and sorted array:', sortedArray);


//Sorting in Descending Order
const sortedDescendingArray = mergedArray.sort((a, b) => b - a);

console.log('Merged and sorted array (descending):', sortedDescendingArray);



const sortedStringArray = mergedArray.sort();

console.log('Merged and sorted array (alphabetical):', sortedStringArray);
