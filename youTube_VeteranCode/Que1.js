/**
 * Que.1 How to find duplicate elemetns in given array.
 *
 *
 */

function findDuplicates() {
    let seen = new Set();
    let duplicates = new Set();

    for (let ele of array) {
        if (seen.has(ele)) {
            duplicates.add(ele);
        } else {
            seen.add(ele);
        }
    }
    return Array.from(duplicates);
}

let array = [1, 2, 3, 4, 5, 1, 2, 3, 2];
console.log(findDuplicates(array)); // Output: [1, 2, 3]