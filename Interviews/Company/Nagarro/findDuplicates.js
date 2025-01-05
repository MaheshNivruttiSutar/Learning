/*
Write Java code to print all the array elements that appears atleast 2 times. (means 2 or greater than two)
*/


function findDuplicates(arr) {
    // Create an object to store the frequency of each element
    const frequencyMap = {};

    // Traverse through the array and count frequency of each element
    for (let i = 0; i < arr.length; i++) {
        frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
    }

    // Print all elements that appear at least 2 times
    console.log("Elements that appear at least 2 times:");
    for (const [key, value] of Object.entries(frequencyMap)) {
        if (value >= 2) {
            console.log(key);
        }
    }
}

// Example usage
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 7, 1];
findDuplicates(arr);
