/*
Write code to remove duplicate elements from array without Hashamap
*/
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]




//Alternative Approach: Using Nested Loops
// This method avoids using higher-order functions like filter but is less efficient:
function removeDuplicates1(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Example usage
const array1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicates1(array);
console.log(uniqueArray1); // Output: [1, 2, 3, 4, 5]
